import { WindowControls } from "#components";
import { locations } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import React from "react";

const Finder = ({ isMobile }) => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (list, name) => (
    <div className="max-w-[200px]">
      <h3>{name}</h3>
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
            onClick={() => setActiveLocation(item)}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {!isMobile && (
        <div id="window-header" className="window-header">
          <WindowControls target="finder" />
        </div>
      )}

      <div className="bg-white flex w-full flex-1 min-h-0">
        <div className="sidebar">
          {renderList(Object.values(locations), "Favorites")}
          {renderList(locations.work.children, "Work")}
        </div>
        <ul className="flex flex-row flex-wrap items-start p-4 max-h-[500px] overflow-auto">
          {activeLocation.children.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-center mr-2"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                openItem(item);
              }}
            >
              <img src={item.icon} alt={item.name} width={80} height={80} />
              <p className=" w-[100px]  text-center text-xs truncate">
                {...item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const FinderWindow = windowWrapper(Finder, "finder");
export default FinderWindow;
