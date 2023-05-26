import { useEffect, useState } from "react";

function useElementPosition(ref: any) {
  const [position, setPosition] = useState();

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        setPosition(ref.current.getBoundingClientRect());
      }
    };

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [ref]);

  return position;
}

export default useElementPosition;
