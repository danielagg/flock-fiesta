"use client";

import { useEffect, useState } from "react";

export const Statistics = () => {
  const Counter = ({
    actualValue,
    label,
  }: {
    actualValue: number;
    label: string;
  }) => {
    const [value, setValue] = useState(actualValue - 100);

    useEffect(() => {
      const timer = setInterval(() => {
        if (value < actualValue) {
          setValue((prevValue) => prevValue + 1);
        } else {
          clearInterval(timer);
        }
      }, 7);
      return () => clearInterval(timer);
    }, [actualValue, value]);

    return (
      <div className="px-3 lg:px-12 py-6 lg:py-20 bg-violet-50 border-violet-200 border shadow-lg w-[300px] text-center rounded-xl">
        <div className="text-2xl lg:text-4xl font-bold">
          <span>{value == actualValue ? `${value}+` : value}</span>
        </div>
        <div className="text-sm">{label}</div>
      </div>
    );
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-16 mt-24 lg:mt-0">
      <Counter label="Events Created" actualValue={5000} />
      <Counter label="Companies Registered" actualValue={400} />
      <Counter label="People Attended" actualValue={17000} />
      <Counter label="To Do" actualValue={1000} />
    </div>
  );
};
