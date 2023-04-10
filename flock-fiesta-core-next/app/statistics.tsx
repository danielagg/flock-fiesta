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
      }, 3);
      return () => clearInterval(timer);
    }, [actualValue, value]);

    return (
      <div className="px-12 py-20 bg-slate-200 w-[300px] text-center rounded-xl">
        <div className="text-4xl font-bold">
          <span>{value == actualValue ? `${value}+` : value}</span>
        </div>
        <div className="text-sm">{label}</div>
      </div>
    );
  };
  return (
    <div className="flex justify-center mt-24">
      <div className="w-2/3 flex justify-between items-center space-x-16">
        <Counter label="Events Created" actualValue={5000} />
        <Counter label="Companies Registered" actualValue={400} />
        <Counter label="People Attended" actualValue={17000} />
        <Counter label="To Do" actualValue={1000} />
      </div>
    </div>
  );
};
