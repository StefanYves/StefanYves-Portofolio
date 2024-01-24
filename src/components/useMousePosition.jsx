import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => document.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
