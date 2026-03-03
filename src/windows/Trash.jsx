import { WindowControls } from "#components";
import { gallery, locations, photosLinks } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import clsx from "clsx";

import React from "react";

const Trash = ({ isMobile }) => {
  const { openWindow } = useWindowStore();
  return (
    <>
      {!isMobile && (
        <div id="window-header" className="window-header">
          <WindowControls target="trash" />
        </div>
      )}

      <div className="flex w-full flex-1">
        <div className="w-full bg-white">
          <ul
            className={clsx(
              "flex p-4 gap-4 items-center flex-wrap overflow-y-auto",
              isMobile ? "h-full pt-10" : "h-[400px]",
            )}
          >
            {locations?.trash.children.map(({ id, imageUrl }) => {
              return (
                <li
                  key={id}
                  onClick={() =>
                    openWindow("imgfile", {
                      id,
                      name: "Gallery Image",
                      kind: "file",
                      fileType: "imh",
                      imageUrl: imageUrl,
                    })
                  }
                  className="w-[250px]"
                >
                  <img src={imageUrl} alt={`Trash image ${id}`} className="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
const BrowserWindow = windowWrapper(Trash, "trash");
export default BrowserWindow;
