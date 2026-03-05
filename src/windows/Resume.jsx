import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeftCircle, ChevronRightCircle, Download } from "lucide-react";

import { WindowControls } from "#components";
import windowWrapper from "#hoc/windowWrapper";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import clsx from "clsx";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const Resume = ({ isMobile }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      {!isMobile && (
        <div id="window-header" className="window-header">
          <WindowControls target="resume" />
          <h2>My Resume</h2>
        </div>
      )}

      <div
        className={clsx(
          "overflow-auto w-full",
          isMobile ? "h-full" : "h-[85vh]",
        )}
      >
        <Document
          file="/files/kattavinaysenareddy.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => alert("PDF Error:", error)}
          renderMode="svg"
          scale={isMobile ? 2 : 1}
        >
          <Page
            pageNumber={pageNumber}
            width={isMobile ? 350 : 700}
            renderTextLayer={false}
          />
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
