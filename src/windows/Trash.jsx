import { WindowControls } from "#components";
import { gallery, locations, photosLinks } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";

import React from "react";

const Trash = () => {
  const { openWindow } = useWindowStore();
  return (
    <>
      <div id="window-header" className="window-header">
        <WindowControls target="trash" />
      </div>

      <div className=" flex w-full ">
        <div className="w-xl bg-white">
          <ul className="flex flex-1 p-4 gap-4 h-[400px] items-center flex-wrap overflow-scroll">
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
