import { WindowControls } from "#components";
import { blogPosts, gallery, photosLinks } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import clsx from "clsx";

import React from "react";

const Photos = ({ isMobile }) => {
  const { openWindow, setActiveLocation } = useWindowStore();
  return (
    <>
      {!isMobile && (
        <div id="window-header" className="window-header">
          <WindowControls target="photos" />
        </div>
      )}

      <div className="flex w-full flex-1 min-h-0 overflow-hidden">
        {!isMobile && (
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
        )}
        <div
          className={clsx(
            "gallery",
            isMobile ? "w-full overflow-y-auto p-4" : "flex-1",
          )}
        >
          <ul
            className={clsx(
              isMobile
                ? "flex flex-col gap-4"
                : "flex items-start gap-4 flex-wrap h-[400px] w-[550px]",
            )}
          >
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
                  className={clsx(!isMobile && "w-[150px] h-[150px]")}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${id}`}
                    className={clsx(
                      "object-cover rounded-lg",
                      isMobile ? "w-full h-auto" : "",
                    )}
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
