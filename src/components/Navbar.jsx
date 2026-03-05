import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import {
  Fullscreen,
  Minimize,
  MoveRight,
  Battery,
  Wifi,
  Signal,
} from "lucide-react";
import { Tooltip } from "react-tooltip";
import useMobile from "#hooks/useMobile";

const Navbar = () => {
  const isMobile = useMobile();
  const { openWindow } = useWindowStore();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    dayjs().format(isMobile ? "h:mm" : "ddd MM D h:mm A"),
  );

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      setCurrentTime(dayjs().format(isMobile ? "h:mm" : "ddd MMM D h:mm A"));
    }, 1000);

    return () => clearInterval(ticker);
  }, [isMobile]);

  if (isMobile) {
    return (
      <nav className="flex justify-between items-center px-6 py-2 bg-transparent backdrop-blur-none border-none  select-none">
        <div className="flex justify-start w-full">
          <time className="text-white font-semibold text-sm">
            {currentTime}
          </time>
        </div>
        <div className="flex justify-end items-center gap-1.5 text-white">
          <Signal size={16} strokeWidth={2.5} />
          <Wifi size={16} strokeWidth={2.5} />
          <Battery size={20} strokeWidth={2} className="rotate-0" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center justify-between relative z-50 gap-3">
      <div className="flex items-center gap-3 ">
        <img src="/images/logo.svg" alt="app logo" />
        <p className="font-bold">Vinaysena's Portfolio</p>
        <ul className="flex items-center gap-3">
          {navLinks.map(({ id, name, type }) => (
            <li
              className="cursor-pointer"
              key={id}
              onClick={() => openWindow(type)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex">
        <ul className="flex items-center gap-2">
          <button onClick={toggleFullscreen}>
            {!isFullScreen ? (
              <Fullscreen
                data-tooltip-id="app-full-screen"
                data-tooltip-content={"Go full screen"}
                data-tooltip-delay-show={150}
                className="icon cursor-pointer"
              />
            ) : (
              <Minimize
                className="icon cursor-pointer"
                data-tooltip-id="app-exit-full-screen"
                data-tooltip-content={"Exit full screen"}
                data-tooltip-delay-show={150}
              />
            )}
          </button>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                className="icon-hover cursor-help"
                src={img}
                alt={`icon-${id}`}
              />
            </li>
          ))}
          <time>{currentTime}</time>
        </ul>
        <Tooltip id="app-full-screen" place="bottom" className="tooltip" />
        <Tooltip id="app-exit-full-screen" place="bottom" className="tooltip" />
      </div>
    </nav>
  );
};

export default Navbar;
