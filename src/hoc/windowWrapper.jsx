import useMobile from "#hooks/useMobile";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ArrowBigLeft, ArrowLeft, Download } from "lucide-react";
import React, { useLayoutEffect, useRef } from "react";

const windowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const isMobile = useMobile();
    const { focusWindow, windows, closeWindow } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      const viewportHeight = window.innerHeight;
      if (!isOpen && el) {
        gsap.to(el, {
          scale: isMobile ? 1 : 0.3,
          opacity: 0,
          y: isMobile ? viewportHeight : viewportHeight * 0.3,
          filter: isMobile ? "none" : "blur(6px)",
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      }
      if (!el || !isOpen) return;

      el.style.display = "block";

      const tl = gsap.timeline();

      if (isMobile) {
        tl.fromTo(
          el,
          {
            y: viewportHeight,
            opacity: 1,
            filter: "none",
            scale: 1,
          },
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
        );
      } else {
        tl.fromTo(
          el,
          {
            scale: 0.05,
            opacity: 0,
            y: viewportHeight * 0.4,
            transformOrigin: "50% 100%",
            filter: "blur(5px)",
          },
          {
            scale: 1.08,
            opacity: 1,
            y: -10,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power4.out",
          },
        ).to(el, {
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }, [isOpen, isMobile]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMobile) return;

      const trigger = el.querySelector(".window-header");
      if (!trigger) return;

      const [instance] = Draggable.create(el, {
        trigger,
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, [isOpen, isMobile, windows[windowKey].data]);

    const handleFocus = (e) => {
      if (e) e.stopPropagation();
      focusWindow(windowKey);
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={`absolute ${
          isMobile ? "inset-0 w-full h-full rounded-none bg-white z-100" : ""
        }`}
        onMouseDown={handleFocus}
      >
        {isMobile && (
          <div className="ios-status-bar h-12 bg-white flex items-center justify-between px-6 pt-2 sticky top-0 z-[101] border-b border-gray-100">
            <button
              onClick={() => closeWindow(windowKey)}
              className="text-blue-500 font-medium text-sm flex items-center gap-2"
            >
              <ArrowLeft size={20} /> <span className="">Go Back</span>
            </button>
            <h1 className="font-semibold text-gray-900 absolute left-1/2 -translate-x-1/2">
              {windowKey.charAt(0).toUpperCase() + windowKey.slice(1)}
            </h1>
            <div className="w-10">
              {windowKey === "resume" && (
                <a
                  href="files/kattavinayasenareddy.pdf"
                  download
                  className="cursor-pointer"
                  title="Download resume"
                >
                  <Download className="icon" />
                </a>
              )}
            </div>
          </div>
        )}
        <div className={isMobile ? "h-[calc(100%-48px)] overflow-y-auto" : ""}>
          <Component {...props} isMobile={isMobile} />
        </div>
      </section>
    );
  };
  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default windowWrapper;
