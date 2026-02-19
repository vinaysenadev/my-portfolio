import { WindowControls } from "#components";
import { socials } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-t">
        <img src={"/images/vinay.jpeg"} alt="" className="w-30 rounded-full" />
        <h3>Let's connect </h3>
        <p>lorem ipsum</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopenner no referrer">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
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
