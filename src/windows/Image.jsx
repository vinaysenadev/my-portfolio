import { WindowControls } from "#components";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const Image = ({ isMobile }) => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;
  const { name, imageUrl } = data;

  return (
    <>
      {!isMobile && (
        <div id="window-header" className="window-header">
          <WindowControls target="imgfile" />
          <h2>{name}</h2>
        </div>
      )}

      <div
        className={clsx(
          "p-1 bg-white",
          isMobile ? "flex-1 flex items-center justify-center pt-10" : "",
        )}
      >
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className={clsx(
                "w-full h-auto object-contain rounded",
                isMobile ? "max-h-full" : "max-h-[70vh]",
              )}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
const ImageWindow = windowWrapper(Image, "imgfile");
export default ImageWindow;
