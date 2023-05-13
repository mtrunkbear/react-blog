import { useEffect, useState } from 'react';

function useElementPosition(ref:any) {
  const [position, setPosition] = useState();

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        //console.log({element:ref.current.getBoundingClientRect()})
        setPosition(ref.current.getBoundingClientRect());
      }
    };

    //updatePosition();
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, [ref]);

  return position;
}

export default useElementPosition;