import React from "react";

type ItemProps = {
  title: string;
  description: string;
  date: string;
  location: string;
  content: string;
};

export default function Item({
  title,
  description,
  date,
  location,
  content,
}: ItemProps) {
  return (
    <div className="flex max-w-xl gap-2 items-center">
      <div className="w-1 h-28 rounded-md bg-gradient-to-b from-primary to-secondary"></div>
      <div className="flex flex-col w-full">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex w-full justify-between">
          <p>{description}</p>
          <p>{date}</p>
        </div>
        <div>{location}</div>
        <div className="mt-4">{content}</div>
      </div>
    </div>
  );
}
