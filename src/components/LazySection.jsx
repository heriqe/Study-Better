// src/components/LazySection.jsx
import React, { useRef, useState, useEffect } from "react";

const LazySection = ({ children, rootMargin = "0px" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazySection;
