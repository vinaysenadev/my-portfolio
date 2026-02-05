import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("ddd MM D h:mm A"),
  );
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
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
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
