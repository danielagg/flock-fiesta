"use client";

import { useAuth } from "@clerk/nextjs";
import { animated, useSpring } from "@react-spring/web";
import { RedirectionButton } from "../shared/redirectionButton";

export const CallToAction = () => {
  const { userId } = useAuth();

  const topToBottom = useSpring({
    from: { y: -250, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 150 },
  });

  const leftToRight = useSpring({
    from: { x: -250, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { duration: 150 },
  });

  return (
    <section className="w-full lg:w-1/2 lg:mt-40">
      <animated.div
        className="text-3xl lg:text-5xl font-extrabold"
        style={{
          transform: topToBottom.y.to((y) => `translateY(${y}px)`),
          opacity: topToBottom.opacity,
        }}
      >
        Culture-building made easy, one event at a time.
      </animated.div>
      <animated.div
        className="text-base mt-8 w-full lg:w-4/5"
        style={{
          transform: leftToRight.x.to((x) => `translateX(${x}px)`),
          opacity: leftToRight.opacity,
        }}
      >
        From team-building retreats to happy hours, with Flock Fiesta your team
        can plan and manage events from start to finish, with all the resources
        they need at their fingertips.
      </animated.div>
      <animated.div
        style={{
          transform: leftToRight.x.to((x) => `translateX(${x}px)`),
          opacity: leftToRight.opacity,
        }}
        className="flex items-center space-x-2 mt-8"
      >
        {userId ? (
          <RedirectionButton label="Go to my Dashboard" href="/dashboard" />
        ) : (
          <>
            <RedirectionButton label="Sign Up" href="/sign-up" />
            <RedirectionButton label="Login" href="/sign-in" unfilled />
          </>
        )}
      </animated.div>
    </section>
  );
};
