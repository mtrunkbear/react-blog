import { useEffect, useState } from "react";

function useWindowPosition() {
  const [position, setPosition] = useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
    viewportHeight: window.innerHeight || document.documentElement.clientHeight,
  });

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight =
        window.innerHeight ;
      setPosition({
        x: window.pageXOffset,
        y: window.pageYOffset,
        viewportHeight,
      });
      //console.log(window);
    };

    window.addEventListener("scroll", handleScroll,{passive:true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
}
export default useWindowPosition;
