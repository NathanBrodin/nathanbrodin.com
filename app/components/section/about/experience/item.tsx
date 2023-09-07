import React from "react";

type ItemProps = {
  title: string;
  description: string;
  date: string;
  location: string;
  content: string;
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
    <div className={`flex md:gap-6 ${className}`}>
      {event ? (
        <div className="box-content h-4 w-4 rounded-full border-2 border-secondary bg-white translate-x-1"></div>
      ) : (
        <div className="box-content h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
      )}
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex flex-col md:flex-row w-full justify-between">
          <p>{description}</p>
          <p>{date}</p>
        </div>
        <div>{location}</div>
        <div className="mt-4 max-w-xl">{content}</div>
      </div>
    </div>
  );
}
