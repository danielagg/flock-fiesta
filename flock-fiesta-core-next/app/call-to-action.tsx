"use client";

import { animated, useSpring } from "@react-spring/web";

export const CallToAction = () => {
  const topToBottom = useSpring({
    from: { y: -250, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 150 },
  });

  const bottomToTop = useSpring({
    from: { x: -250, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { duration: 150 },
  });

  return (
    <section className="w-1/2">
      <animated.div
        className="text-6xl font-extrabold"
        style={{
          transform: topToBottom.y.to((y) => `translateY(${y}px)`),
          opacity: topToBottom.opacity,
        }}
      >
        Culture-building made easy, one event at a time.
      </animated.div>
      <animated.div
        className="text-xl mt-12 w-2/3"
        style={{
          transform: bottomToTop.x.to((x) => `translateX(${x}px)`),
          opacity: bottomToTop.opacity,
        }}
      >
        From team-building retreats to happy hours, with Flock Fiesta your team
        can plan and manage events from start to finish, with all the resources
        they need at their fingertips.
      </animated.div>
    </section>
  );
};
