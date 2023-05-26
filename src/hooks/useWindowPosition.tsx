import { useEffect, useState } from "react";

function useWindowPosition() {
  const [position, setPosition] = useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
    viewportHeight: window.innerHeight || document.documentElement.clientHeight,
    viewportWidth: window.innerWidth || document.documentElement.clientWidth,
  });

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      setPosition({
        x: window.pageXOffset,
        y: window.pageYOffset,
        viewportHeight,
        viewportWidth,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
}
export default useWindowPosition;
