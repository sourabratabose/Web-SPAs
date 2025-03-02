import { motion } from "motion/react";
import { HTMLAttributes, useEffect, useState } from "react";

type CursorState = {
  h: number;
  w: number;
  x: number;
  y: number;
  scale: number;
};

export default function MouseCursor({
  className,
}: {
  className: HTMLAttributes<HTMLDivElement>;
}) {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    h: 12,
    w: 12,
    scale: 1,
  });

  const cursorStateUpdate: (e: MouseEvent) => void = (e: MouseEvent) => {
    setCursorState((prev_state) => {
      let new_state = {
        ...prev_state,
        x:
          e.clientX < prev_state.w / 2
            ? prev_state.w / 2
            : e.clientX > window.innerWidth - prev_state.w / 2
            ? window.innerWidth - prev_state.w / 2
            : e.clientX,
        y:
          e.clientY < prev_state.h / 2
            ? prev_state.h / 2
            : e.clientY > window.innerHeight - prev_state.h / 2
            ? window.innerHeight - prev_state.h / 2
            : e.clientY,
      };
      if (
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLAnchorElement
      ) {
        new_state = {
          ...new_state,
          scale: 1.2,
        };
      } else {
        new_state = {
          ...new_state,
          h: 12,
          w: 12,
        };
      }
      if (
        e.target instanceof HTMLHeadingElement ||
        e.target instanceof HTMLParagraphElement
      ) {
        const lh = window.getComputedStyle(e.target).lineHeight
        new_state = {
          ...new_state,
          h: Number(lh.slice(0, lh.indexOf("p"))),
          w: 4,
        };
      } else {
        new_state = {
          ...new_state,
          h: 12,
          w: 12,
        };
      }
      return new_state;
    });
  };
  const onCursorPress: () => void = () => {
    setCursorState((prev_state) => {
      return {
        ...prev_state,
        scale: 0.8,
      };
    });
  };
  const onCursorRelease: () => void = () => {
    setCursorState((prev_state) => {
      return {
        ...prev_state,
        scale: 1,
      };
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", cursorStateUpdate);
    document.addEventListener("mousedown", onCursorPress);
    document.addEventListener("mouseup", onCursorRelease);
    return () => {
      document.removeEventListener("mousemove", cursorStateUpdate);
      document.removeEventListener("mousedown", onCursorPress);
      document.removeEventListener("mouseup", onCursorRelease);
    };
  }, []);

  const movementTransition = { type: "tween", duration: 0.2, ease: "easeOut" };
  const layoutTransition = { type: "spring", duration: 0.5 };

  return (
    <motion.div
      className={
        "hidden sm:block fixed rounded-full mix-blend-difference pointer-events-none -translate-1/2" +
        " " +
        className
      }
      initial={{ top: "50%", left: "50%" }}
      transition={{
        x: movementTransition,
        y: movementTransition,
        height: layoutTransition,
        width: layoutTransition,
      }}
      animate={{
        top: cursorState.y,
        left: cursorState.x,
        height: cursorState.h,
        width: cursorState.w,
        scale: cursorState.scale,
      }}
    />
  );
}
