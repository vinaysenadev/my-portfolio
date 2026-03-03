import { WindowControls } from "#components";
import { blogPosts, gallery, photosLinks } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";

import React from "react";

const Photos = () => {
  const { openWindow, setActiveLocation } = useWindowStore();
  return (
    <>
      <div id="window-header" className="window-header">
        <WindowControls target="photos" />
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((item) => (
              <li key={item?.id}>
                <img src={item.icon} alt={item.title} className="" />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => {
              return (
                <li
                  key={id}
                  onClick={() =>
                    openWindow("imgfile", {
                      id,
                      name: "Gallery Image",
                      kind: "file",
                      fileType: "imh",
                      imageUrl: img,
                    })
                  }
                  className="w-[250px]"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${id}`}
                    className="border-[1.5px] w-[300px]"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
const BrowserWindow = windowWrapper(Photos, "photos");
export default BrowserWindow;
