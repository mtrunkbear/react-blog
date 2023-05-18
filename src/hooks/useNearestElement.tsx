import { useEffect, useState } from "react";
import useWindowPosition from "./useWindowPosition";
function useNearestElement(ref: any) {
  const [nearestElement, setNearestElement] = useState<
    HTMLElement | null | Boolean
  >(null);
  const { viewportHeight }: any = useWindowPosition();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { y } = ref.current.getBoundingClientRect();
        /*  if (top < viewportHeight && bottom > 0) {
          setNearestElement(ref.current);
        } */
        /* const isVerticallyCentral =
         Math.abs(viewportHeight / 2 - (y + height / 8) - 150) < 250; */

        if (y < 400 && y > 0) {
          setNearestElement(true);
        } else {
          setNearestElement(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, viewportHeight, window]);

  return nearestElement;
}

export default useNearestElement;
