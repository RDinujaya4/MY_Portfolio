import { useEffect, useRef } from "react";

/** Global blue dot cursor (desktop only; ignores touch devices). */
export default function GlobalCursor({
  hideNativeCursor = false,
}: { hideNativeCursor?: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with a precise pointer (e.g., mouse)
    const mql = window.matchMedia("(pointer: fine)");
    if (!mql.matches) return;

    const el = dotRef.current!;
    let raf = 0;
    let visible = false;

    // trailing state
    const pos = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };

    const setVisible = (v: boolean) => {
      visible = v;
      el.style.opacity = v ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      // show on first movement
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => (el.style.transform += " scale(0.9)");
    const onUp = () => (el.style.transform = el.style.transform.replace(" scale(0.9)", ""));

    const tick = () => {
      // ease towards target
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    if (hideNativeCursor) document.body.classList.add("cursor-hide");
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (hideNativeCursor) document.body.classList.remove("cursor-hide");
    };
  }, [hideNativeCursor]);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-2.5 w-2.5 rounded-full bg-blue-500 pointer-events-none transition-opacity duration-150"
      style={{ opacity: 0 }}
    />
  );
}
