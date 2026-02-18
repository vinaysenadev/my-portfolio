import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("ddd MM D h:mm A")
  );
  useEffect(() => {
    const ticker = setInterval(() => {
      setCurrentTime(dayjs().format("ddd MMM D h:mm A"));
    }, 1000);

    return () => clearInterval(ticker);
  }, []);

  return (
    <section id="welcome">
      <p className="text-5xl text-center">
        Hey, I'm <b>Vinay sena </b>!
      </p>
      <p></p>
      <h1 className="mt-1 text-5xl text-center">Welcome to my portfolio</h1>
      <p>{currentTime}</p>
      <div className="small-screen">
        <p>This portfolio is designed for desktops/tablets</p>
      </div>
    </section>
  );
};

export default Welcome;
