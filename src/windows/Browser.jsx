import { WindowControls } from "#components";
import { locations } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import React from "react";

const Browser = ({ isMobile }) => {
  const projects = locations.work?.children ?? [];
  console.log({ projects });

  const renderDescription = (descriptionData) => {
    return (
      <section className="">
        <div className="">
          {descriptionData.map((item, idx) => {
            // Trim whitespace
            const text = item.trim();

            // Heading detection: starts with emoji ✨🛡️🤖 etc. or ends with colon
            const isFeatureTitle = /^[^\w\s]*\s/.test(text); // emoji at start
            const isSectionTitle = /✨|🛠️/.test(text);
            const isTechStackItem =
              /Framework:|AI Core:|Styling:|State Management:|Data Engine:|Visuals:/.test(
                text,
              );

            if (isSectionTitle) {
              return (
                <h2 key={idx} className="text-3xl font-bold text-center mb-6">
                  {text.replace("✨ ", "")}
                </h2>
              );
            }

            if (isFeatureTitle) {
              return (
                <div key={idx} className="">
                  <h3 className="text-xl font-semibold mb-2">{text}</h3>
                </div>
              );
            }

            if (isTechStackItem) {
              return (
                <li key={idx} className="list-disc">
                  {text}
                </li>
              );
            }

            // Default paragraph for regular descriptions
            return (
              <p key={idx} className="">
                {text}
              </p>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <>
      {!isMobile && (
        <div id="window-header" className="window-header">
          <WindowControls target="browser" />
          <PanelLeft className="ml-10 icon" />

          <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
          </div>

          <div className="flex-1 flex-center gap-3">
            <ShieldHalf className="icon" />
            <div className="search">
              <Search className="icon" />
              <input
                type="text"
                placeholder="Search to enter website name"
                className="flex-1"
                disabled
              />
            </div>
            <div className="flex items-center gap-5">
              <Share className="icon" />
              <Plus className="icon" />
              <Copy className="icon" />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col p-5 md:h-[500px] overflow-auto">
        <h2 className="font-bold">My Projects Overview</h2>

        <div className="mt-2">
          {projects.map((project, index) => {
            const desc = project?.description || [];
            return (
              <div
                key={index}
                className="border-gray-200 rounded-md border-[1.5px] my-3 p-2"
              >
                <h1 className="font-bold text-2xl px-2">{project.name}</h1>

                <div className="flex items-start  flex-col gap-2 p-2">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    {project?.images?.length > 0 &&
                      project?.images?.map((img, index) => {
                        return (
                          <div
                            key={index}
                            className="border-gray-200 border-[1.5px] rounded-md overflow-hidden flex-1"
                          >
                            <img src={img} className=" "></img>
                          </div>
                        );
                      })}
                  </div>
                  <div className="content mt-2 flex-1">
                    {desc.map((d, index) => {
                      return (
                        <p key={index} className="text-sm mb-2 text-gray-500">
                          {d}
                        </p>
                      );
                    })}
                    <a
                      href={project.href}
                      target="_blank"
                      className="text-sm px-4 py-2 bg-gray-500/70 text-white rounded-lg hover:bg-gray-500/80"
                    >
                      Open web app
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
const BrowserWindow = windowWrapper(Browser, "browser");
export default BrowserWindow;
