import React from "react";

type ItemProps = {
  title: string;
  description?: string;
  date: string;
  location?: string;
  content?: string;
  className?: string;
  event?: boolean;
};

export default function Item({
  title,
  description,
  date,
  location,
  content,
  className,
  event,
}: ItemProps) {
  return (
    <div className={`flex gap-2 md:gap-6 ${className}`}>
      {event ? (
        <div className="box-content h-4 w-4 flex-shrink-0 translate-x-[3px] md:translate-x-1 rounded-full border-2 border-secondary bg-white"></div>
      ) : (
        <div className="box-content h-6 w-6 flex-shrink-0 rounded-full border-2 border-primary bg-white"></div>
      )}
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex w-fit flex-col justify-between md:w-full md:flex-row">
          <p className={!description ? "h-6 w-16  rounded-md bg-gray-300 animate-pulse" : ""}>
            {description}
          </p>
          <p>{date}</p>
        </div>
        <p className={!location ? "h-6 w-36 rounded-md bg-gray-300 animate-pulse mt-1" : ""}>
          {location}
        </p>
        <p
          className={`mt-4 max-w-xl break-all ${
            !content ? "h-6 md:w-[576px]  rounded-md bg-gray-300 animate-pulse" : ""
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
