import { useEffect, useState } from "react";
import useElementPosition from "./useElementPosition";
import useWindowPosition from "./useWindowPosition";

function useCentral(ref: any) {
  const { viewportHeight } = useWindowPosition();
  const elementPosition: any = useElementPosition(ref);

  const [isCentral, setIsCentral] = useState<any>();
  /*  Math.abs(viewportHeight / 2 - (elementPosition.y + 500)) < 200  */

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const isVerticallyCentral =
        Math.abs(
          viewportHeight / 2 -
            (elementPosition?.y + elementPosition?.height / 8) -
            150
        ) < 250;
      //console.log(elementPosition?.y);
      setIsCentral(isVerticallyCentral);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, viewportHeight, elementPosition]);

  return isCentral;
}

export default useCentral;
