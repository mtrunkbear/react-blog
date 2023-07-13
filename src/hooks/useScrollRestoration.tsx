import { useEffect } from "react";

const useScrollRestorarion = (pathname:string) => {
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollRestorarion;
