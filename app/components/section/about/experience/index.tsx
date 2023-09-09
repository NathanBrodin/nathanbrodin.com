"use client";

import Item from "./item";
import Shape from "./shape";
import BottomShape from "./bottomShape";
import TopShape from "./topShape";
import Line from "./line";
import { useRef } from "react";

export default function Experience() {
  const cursorRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full flex-col items-center ">
      <h2 className="text-lg font-semibold">My career path</h2>
      <div className="relative mt-8 flex w-full justify-start overflow-y-clip lg:justify-center">
        <div className="sticky left-0 top-1/3 z-[16] mb-16  ml-7 h-0  w-0 -translate-y-60 translate-x-[-19px] lg:translate-x-[-2px]">
          <div className="flex flex-col items-center">
            <div className="h-60 w-[2px] relative z-0 flex-shrink-0 bg-primary"></div>
            <div
              ref={cursorRef}
              className="h-6 w-6 flex-shrink-0 relative rounded-full border-2 border-primary bg-white"
            ></div>
          </div>
        </div>
        <Line className="left-2 lg:left-1/4 lg:ml-[19px]" />
        <TopShape />
        <div className="relative z-[15] flex translate-x-[-33px] flex-col gap-32 py-32 lg:translate-x-[-14px]">
          <div className=" relative flex flex-col gap-32">
            <Line className="left-[54px] hidden lg:block" />
            <Item
              cursorRef={cursorRef}
              className="lg:translate-x-[45px]"
              title="ESIEA - IT ENGINEERING"
              description="Master's degree in software engineering"
              date="2020-2025"
              location="Laval, France"
              content="Full-Stack Development, Application Design, Computer Networks, System Programming, Numerical in Python, Estimation and Data Analysis, Virtualization and Containerization, Applied Cryptography, Information System Architecture."
            />
            <div className="relative">
              <Shape />
              <Item
                cursorRef={cursorRef}
                className="lg:translate-x-[84px]"
                title="Programming workshop CLEP Laval"
                description="CLEP - Centre Lavallois d'Education Populaire"
                date="Oct 2020-Jun 2021"
                location="Laval, France"
                content="Animation of Python programming courses for young people at the CLEP leisure center in Laval"
              />
            </div>
            <Item
              cursorRef={cursorRef}
              event
              className="lg:translate-x-[45px]"
              title="TOEIC® Listening and Reading"
              description="ETS Global B.V."
              date="May 2021"
              location=" "
              content="Score: 840/980"
            />
            <div className="relative">
              <Shape />
              <Item
                cursorRef={cursorRef}
                className="lg:translate-x-[84px]"
                title="Educational Assistant"
                description="Collège Fernand Puech"
                date="Sep 2021-Jun 2022"
                location="Laval, France"
                content="We organized and ran robotics and programming classes for 5th and 4th graders every Thursday at Fernand Puech college"
              />
            </div>
            <Item
              event
              cursorRef={cursorRef}
              className="lg:translate-x-[45px]"
              title="Winner RoboRave Craon"
              description="RoboRAVE International, a program of Inquiry Facilitators, Inc."
              date="Jun 2022"
              location="Craon, France"
              content="Coach of 6 teams of middle school students during the RoboRave robotic contest. 1 winning team of the Line-Following, 3rd and 4th place in the SumoBot."
            />
            <Item
              event
              cursorRef={cursorRef}
              className="lg:translate-x-[45px]"
              title="Second prize at the PST Laval 2022 show"
              description="ESIEA"
              date="Jun 2022"
              location="Laval, France"
              content="Second prize at the Scientific and Technical Project fair on the ESIEA Laval campus. Rewarded for my project 'Esieabot mobile application' among the 20 projects of 2nd year students."
            />
            <div className="relative lg:mb-20">
              <Shape />
              <Item
                cursorRef={cursorRef}
                className="lg:translate-x-[84px]"
                title="CENTRIA UNIVERSITY OF APPLIED SCIENCES"
                description="Information technology exchange semester"
                date="Aug-Dec 2022"
                location="Kokkola, Finland"
                content="My courses: C#, Python and SQL, Object-Oriented Modeling, Operating systems, statistics, Electric Circuits."
              />
            </div>
            <div className="relative lg:mb-20">
              <Shape />
              <Item
                cursorRef={cursorRef}
                className="lg:translate-x-[84px]"
                title="FRONTEND ENGINEER INTERN"
                description="DNB"
                date="Jun-Aug 2023"
                location="Oslo, Norway"
                content=" I had the exciting opportunity to contribute to the company's 'Emerging Technologies' department as a Frontend Engineer"
              />
            </div>
            <div className="relative lg:mb-20">
              <Shape />
              <Item
                cursorRef={cursorRef}
                className="lg:translate-x-[84px]"
                title="SOFTWARE ENGINEER INTERN"
                date="April-Aug 2024"
              />
            </div>

            <div className="relative lg:mb-20">
              <Shape />
              <Item
                cursorRef={cursorRef}
                className="lg:translate-x-[84px]"
                title="EXCHANGE SEMESTER"
                date="Aug 2023-Jan 2024"
              />
            </div>

            <div className="relative lg:mb-32">
              <Shape />
              <Item
                cursorRef={cursorRef}
                className="lg:translate-x-[84px]"
                title="SOFTWARE ENGINEER INTERN"
                date="Feb-Jul 2025"
              />
            </div>
            <BottomShape />
          </div>
          <Item
            className="lg:translate-x-[2px]"
            title="JUNIOR SOFTWARE ENGINEER"
            date="Aug 2025 - Undefined"
            cursorRef={cursorRef}
          />
        </div>
      </div>
    </div>
  );
}
