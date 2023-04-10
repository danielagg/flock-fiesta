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
    <section className="w-1/2 mt-40">
      <animated.div
        className="text-5xl font-extrabold"
        style={{
          transform: topToBottom.y.to((y) => `translateY(${y}px)`),
          opacity: topToBottom.opacity,
        }}
      >
        Culture-building made easy, one event at a time.
      </animated.div>
      <animated.div
        className="text-base mt-8 w-4/5"
        style={{
          transform: bottomToTop.x.to((x) => `translateX(${x}px)`),
          opacity: bottomToTop.opacity,
        }}
      >
        From team-building retreats to happy hours, with Flock Fiesta your team
        can plan and manage events from start to finish, with all the resources
        they need at their fingertips.
      </animated.div>
      <div className="flex items-center space-x-2 mt-8">
        <button className="border-slate-900 border-2 bg-slate-900 text-white py-2 px-6 rounded">
          Sign Up
        </button>
        <button className="border-slate-900 border-2 py-2 px-6 rounded">
          Login
        </button>
      </div>
    </section>
  );
};
