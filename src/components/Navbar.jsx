import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import { Fullscreen, Minimize, MoveRight } from "lucide-react";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("ddd MM D h:mm A")
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
      setCurrentTime(dayjs().format("ddd MMM D h:mm A"));
    }, 1000);

    return () => clearInterval(ticker);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="app logo" />
        <p className="font-bold">Vinaysena's Portfolio</p>
        <ul>
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

      <div>
        <div className="italic text-sm justify-end flex">
          Enable Full Screen Mode for the Best macOS Experience{" "}
          <MoveRight className="" />
        </div>
        <ul>
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
          <Tooltip id="app-full-screen" place="bottom" className="tooltip" />
          <Tooltip
            id="app-exit-full-screen"
            place="bottom"
            className="tooltip"
          />
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                className="icon-hover cursor-help"
                src={img}
                alt={`icon-${id}`}
              />
            </li>
          ))}
        </ul>
        <time>{currentTime}</time>
      </div>
    </nav>
  );
};

export default Navbar;
