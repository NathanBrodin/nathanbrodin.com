import React from "react";
import Item from "./item";

export default function Experience() {
  return (
    <div className="flex w-full flex-col items-center ">
      <h2 className="text-lg font-semibold">My career path</h2>
      <div className="relative mt-8 w-full flex flex-col">
        <div className="absolute left-1/2 h-[300px] w-[2px] translate-x-1/2 bg-gray-500"></div>

        <div className="flex w-full flex-col gap-8">
          <Item
            title="ESIEA - IT ENGINEERING"
            description="Master's degree in software engineering"
            date="2020-2025"
            location="Laval, France"
            content="Applied cryptography, Network..."
          />
          <Item
            title="CENTRIA UNIVERSITY OF APPLIED SCIENCES"
            description="Information technology exchange semester"
            date="Aug-Dec 2022"
            location="Kokkola, Finland"
            content="Applied cryptography, Network..."
          />
        </div>
      </div>
    </div>
  );
}
