"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";

type ItemProps = {
  title: string;
  description?: string;
  date: string;
  location?: string;
  content?: string;
  className?: string;
  event?: boolean;
  cursorRef?: RefObject<HTMLDivElement>;
};

export default function Item({
  title,
  description,
  date,
  location,
  content,
  className,
  event,
  cursorRef,
}: ItemProps) {
  const selfRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      if (cursorRef?.current && selfRef.current) {
        const top = cursorRef.current.getBoundingClientRect().top;
        const selfTop = selfRef.current.getBoundingClientRect().top;

        if (top <= selfTop) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursorRef]);

  return (
    <div
      ref={selfRef}
      className={`flex translate-x-1 gap-2 lg:gap-6 ${className} transition-all duration-200 ${
        active ? "text-black" : "text-primary"
      }`}
    >
      {event ? (
        <div
          className={`mr-1 box-content h-1 w-4 flex-shrink-0 rounded-lg border-2 bg-white transition-all duration-200 ${
            active ? "border-gray-500" : "border-secondary"
          }`}
        ></div>
      ) : (
        <div
          className={`box-content flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            active ? "border-gray-500" : "border-secondary"
          }`}
        >
          <div
            className={`transition-all duration-200 ${
              active
                ? "h-3 w-3 rounded-full border-2 border-gray-500"
                : " h-3 w-3 rounded-full bg-secondary"
            }`}
          ></div>
        </div>
      )}
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex w-fit flex-col justify-between lg:w-full lg:flex-row">
          <p
            className={
              !description
                ? "h-6 w-16  animate-pulse rounded-md bg-gray-300"
                : ""
            }
          >
            {description}
          </p>
          <p>{date}</p>
        </div>
        <p
          className={
            !location
              ? "mt-1 h-6 w-36 animate-pulse rounded-md bg-gray-300"
              : ""
          }
        >
          {location}
        </p>
        <p
          className={`mt-4 max-w-xl ${
            !content
              ? "h-6 animate-pulse  rounded-md bg-gray-300 lg:w-[576px]"
              : ""
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
