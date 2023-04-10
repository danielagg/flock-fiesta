"use client";

import { MainLandingCard } from "./main-landing-card";
import { SecondaryLandingCard } from "./secondary-landing-card";
import { animated, useSpring } from "@react-spring/web";

export const Illustrations = () => {
  const rightToLeft = useSpring({
    from: { x: 1000, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { duration: 300 },
  });

  return (
    <animated.aside
      className="w-1/2 relative min-h-[700px]"
      style={{
        transform: rightToLeft.x.to((x) => `translateX(${x}px)`),
        opacity: rightToLeft.opacity,
      }}
    >
      <SecondaryLandingCard />
      <MainLandingCard />
    </animated.aside>
  );
};
