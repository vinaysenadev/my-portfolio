import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import useWindowStore from "#store/window";
import useMobile from "#hooks/useMobile";

const Dock = () => {
  const isMobile = useMobile();
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;

    if (!dock || isMobile) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        }),
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, [isMobile]);

  const toggleApp = (app) => {
    if (!app.canOpen) return;
    const window = windows[app.id];
    if (!window) return;

    if (window.isOpen) {
      if (!isMobile) closeWindow(app.id); // On mobile, clicking again just keeps it open or we handle close via "Done"
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock" className={isMobile ? "!block !bottom-6" : ""}>
      <div
        ref={dockRef}
        className={`dock-container ${isMobile ? "!rounded-[2rem] px-4 py-2" : ""}`}
      >
        {dockApps.map(({ id, name, icon, canOpen }) => {
          return (
            <div key={id} className="relative flex justify-center">
              <button
                type="button"
                className={`dock-icon ${isMobile ? "!size-12" : ""}`}
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={() => toggleApp({ id, canOpen })}
              >
                <img
                  src={`/images/${icon}`}
                  alt={name}
                  className={canOpen ? "" : "opacity-60"}
                />
              </button>
            </div>
          );
        })}
      </div>
      {!isMobile && (
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      )}
    </section>
  );
};

export default Dock;
