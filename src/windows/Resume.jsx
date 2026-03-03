import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeftCircle, ChevronRightCircle, Download } from "lucide-react";

import { WindowControls } from "#components";
import windowWrapper from "#hoc/windowWrapper";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div id="window-header" className="window-header">
        <WindowControls target="resume" />
        <h2>My Resume</h2>

        <a
          href="files/Vinayasenareddykatta.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div className="overflow-auto h-[85vh]">
        <Document
          file="files/Vinayasenareddykatta.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="flex gap-5 justify-between p-2">
          <p className="text-sm text-gray-500">
            Page {pageNumber} of {numPages}
          </p>

          <div className="flex gap-2">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber((prev) => prev - 1)}
            >
              <ChevronLeftCircle className="icon text-gray-500 cursor-pointer" />
            </button>

            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber((prev) => prev + 1)}
            >
              <ChevronRightCircle className="icon text-gray-500 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const ResumeWindow = windowWrapper(Resume, "resume");
export default ResumeWindow;
