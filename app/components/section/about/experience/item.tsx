import React, { RefObject, useRef } from "react";

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
  cursorRef
}: ItemProps) {
  const selfRef = useRef<HTMLDivElement>(null);


  if(cursorRef?.current && selfRef.current) {
    const top = cursorRef.current.getBoundingClientRect().top;
    const selfTop = selfRef.current.getBoundingClientRect().top;

    console.log(`Top: ${top}, selfTop: ${selfTop}`)
  }

  return (
    <div ref={selfRef}  className={`flex gap-2 lg:gap-6 ${className}`}>
      {event ? (
        <div className="mr-1 box-content h-4 w-4 flex-shrink-0 translate-x-[4px] rounded-full border-2 border-secondary bg-white lg:translate-x-1"></div>
      ) : (
        <div className="box-content h-6 w-6 flex-shrink-0 rounded-full border-2 border-primary bg-white"></div>
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
