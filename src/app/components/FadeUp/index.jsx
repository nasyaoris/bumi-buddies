import React, { useState, useEffect } from "react";
import { FadeUpContainer } from "./styles"

const FadeUp = (props) => {
  const [isActive, setActive] = useState(true);
  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {isActive ? setActive(entry.isIntersecting) : setActive(isActive)});
    });
    observer.observe(domRef?.current);
    return () => observer.unobserve(domRef?.current);
  }, []);

  return (
    <FadeUpContainer ref={domRef} className={isActive ? "isActive" : "notActive"}>
      {props.children}
    </FadeUpContainer>

  )

}

export default FadeUp;
