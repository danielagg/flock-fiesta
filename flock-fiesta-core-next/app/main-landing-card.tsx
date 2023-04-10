"use client";

import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

export const MainLandingCard = () => {
  const [animateDirectionIsUp, setAnimateDirectionIsUp] = useState(true);

  const spring = useSpring({
    to: async (next) => {
      while (true) {
        await next({ y: animateDirectionIsUp ? 10 : 0 });
        await next({ y: animateDirectionIsUp ? 0 : 10 });
        setAnimateDirectionIsUp(!animateDirectionIsUp);
      }
    },
    from: { y: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{ transform: spring.y.to((y) => `translateY(${y}px)`) }}
    >
      <div className="absolute inset-0 ml-[40px] mt-[40px]   w-[300px] h-[500px] bg-slate-900 rounded-3xl z-10"></div>
      <div className="absolute inset-0 w-[380px] h-[580px] bg-gradient-to-tl from-slate-600 to-slate-200 rounded-3xl z-0 opacity-50"></div>
    </animated.div>
  );
};
