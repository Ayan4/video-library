import { useEffect, useState } from "react";

export default function useViewCountShortnerVideo() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [viewNumber, setViewNumber] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);

    if (screenWidth < "410") {
      setViewNumber(true);
    } else {
      setViewNumber(false);
    }

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [screenWidth]);

  return [viewNumber];
}
