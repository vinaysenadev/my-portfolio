import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useLayoutEffect, useRef } from "react";

const windowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      const viewportHeight = window.innerHeight;
      if (!isOpen && el) {
        gsap.to(el, {
          scale: 0.3,
          opacity: 0,
          y: viewportHeight * 0.3,
          filter: "blur(6px)",
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

      tl.fromTo(
        el,
        {
          scale: 0.05,
          opacity: 0,
          y: viewportHeight * 0.4, // start lower on screen
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
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      const trigger = el.querySelector(".window-header");
      if (!trigger) return;

      const [instance] = Draggable.create(el, {
        trigger,
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, [isOpen, windows[windowKey].data]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      //   el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    const handleFocus = (e) => {
      if (e) e.stopPropagation();
      focusWindow(windowKey);
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
        onMouseDown={handleFocus}
      >
        <Component {...props} />
      </section>
    );
  };
  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default windowWrapper;
