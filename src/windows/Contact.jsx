import { WindowControls } from "#components";
import { socials } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import clsx from "clsx";
import React from "react";

const Contact = ({ isMobile }) => {
  return (
    <>
      {!isMobile && (
        <div id="window-header" className="window-header">
          <WindowControls target="contact" />
          <h2>Contact Me</h2>
        </div>
      )}
      <div
        className={clsx(
          "p-5 flex flex-col gap-2",
          isMobile ? "flex-1 overflow-y-auto pt-10" : "space-y-6",
        )}
      >
        <div className="flex items-center">
          <img
            src={"/images/vinay.jpeg"}
            alt=""
            className="w-36.5 rounded-md"
          />
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <p className="text-md mt-4 sm:text-2xl italic text-gray-600 dark:text-gray-400 text-center md:text-left">
              “Talk is cheap. Show me the code.”
            </p>
            <p className="text-sm text-gray-600 text-right self-end pr-10">
              — Linus Torvalds
            </p>
          </div>
        </div>

        <ul>
          {socials.map(({ id, bg, link, icon, text, label }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopenner no referrer">
                <img src={icon} alt={text} className="size-5" />
                <p className="text-xs">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ContactWindow = windowWrapper(Contact, "contact");
export default ContactWindow;
