import { locations, dockApps } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import React from "react";
import useMobile from "#hooks/useMobile";

const projects = locations.work?.children ?? [];

const Home = () => {
  const isMobile = useMobile();
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  useGSAP(() => {
    if (!isMobile) {
      Draggable.create(".folder");
    }
  }, [isMobile]);

  const handleOpenWindow = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  if (isMobile) {
    return (
      <section id="home-mobile" className="p-6 pt-10 h-full overflow-y-auto">
        <div className="grid grid-cols-4 gap-y-8 gap-x-4">
          {dockApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col items-center gap-1 active:scale-95 transition-transform"
              onClick={() => openWindow(app.id)}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[1.25rem] overflow-hidden shadow-lg border border-white/10 p-2 transform transition-transform">
                <img
                  src={`/images/${app.icon}`}
                  alt={app.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] text-white font-medium text-center truncate w-full px-1">
                {app.name}
              </p>
            </div>
          ))}
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center gap-1 active:scale-95 transition-transform"
              onClick={() => handleOpenWindow(project)}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[1.25rem] overflow-hidden shadow-lg border border-white/10 p-2">
                <img
                  src="/images/folder.png"
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] text-white font-medium text-center truncate w-full px-1">
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenWindow(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
