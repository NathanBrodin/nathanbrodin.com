import React from "react";
import Item from "./item";
import Shape from "./shape";
import BottomShape from "./bottomShape";
import TopShape from "./topShape";
import Line from "./line";

export default function Experience() {
  return (
    <div className="flex w-full flex-col items-center ">
      <h2 className="text-lg font-semibold">My career path</h2>
      <div className="relative mt-8 flex w-full justify-center">
        <Line className="left-2 md:left-1/4 md:ml-[19px]" />
        <TopShape />
        <div className="relative z-10 flex flex-col gap-32 py-32">
          <div className=" relative flex flex-col gap-32">
            <Line className="left-[54px]" />
            <Item
              className="translate-x-[104px] md:translate-x-[41px]"
              title="ESIEA - IT ENGINEERING"
              description="Master's degree in software engineering"
              date="2020-2025"
              location="Laval, France"
              content="Full-Stack Development, Application Design, Computer Networks, System Programming, Numerical in Python, Estimation and Data Analysis, Virtualization and Containerization, Applied Cryptography, Information System Architecture."
            />
            <div className="relative">
              <Shape />
              <Item
                className="translate-x-[104px] md:translate-x-[82px]"
                title="Programming workshop CLEP Laval"
                description="CLEP - Centre Lavallois d'Education Populaire"
                date="Oct 2020-Jun 2021"
                location="Laval, France"
                content="Animation of Python programming courses for young people at the CLEP leisure center in Laval"
              />
            </div>
            <Item
              event
              className="translate-x-[104px] md:translate-x-[41px]"
              title="TOEIC® Listening and Reading"
              description="ETS Global B.V."
              date="May 2021"
              location=""
              content="Score: 840/980"
            />
            <div className="relative">
              <Shape />
              <Item
                className="translate-x-[104px] md:translate-x-[82px]"
                title="Educational Assistant"
                description="Collège Fernand Puech"
                date="Sep 2021-Jun 2022"
                location="Laval, France"
                content="We organized and ran robotics and programming classes for 5th and 4th graders every Thursday at Fernand Puech college"
              />
            </div>
            <Item
              event
              className="translate-x-[104px] md:translate-x-[41px]"
              title="Winner RoboRave Craon"
              description="RoboRAVE International, a program of Inquiry Facilitators, Inc."
              date="Jun 2022"
              location="Craon, France"
              content="Coach of 6 teams of middle school students during the RoboRave robotic contest. 1 winning team of the Line-Following, 3rd and 4th place in the SumoBot."
            />
            <Item
              event
              className="translate-x-[104px] md:translate-x-[41px]"
              title="Second prize at the PST Laval 2022 show"
              description="ESIEA"
              date="Jun 2022"
              location="Laval, France"
              content="Second prize at the Scientific and Technical Project fair on the ESIEA Laval campus. Rewarded for my project 'Esieabot mobile application' among the 20 projects of 2nd year students."
            />
            <div className="relative mb-20">
              <Shape />
              <Item
                className="translate-x-[104px] md:translate-x-[82px]"
                title="CENTRIA UNIVERSITY OF APPLIED SCIENCES"
                description="Information technology exchange semester"
                date="Aug-Dec 2022"
                location="Kokkola, Finland"
                content="My courses: C#, Python and SQL, Object-Oriented Modeling, Operating systems, statistics, Electric Circuits."
              />
            </div>
            <div className="relative mb-20">
              <Shape />
              <Item
                className="translate-x-[104px] md:translate-x-[82px]"
                title="FRONTEND ENGINEER INTERN"
                description="DNB"
                date="Jun-Aug 2023"
                location="Oslo, Norway"
                content=" I had the exciting opportunity to contribute to the company's 'Emerging Technologies' department as a Frontend Engineer"
              />
            </div>
            <div className="relative mb-20">
              <Shape />
              <Item
                className="translate-x-[104px] md:translate-x-[82px]"
                title="SOFTWARE ENGINEER INTERN"
                description="XXX"
                date="April-Aug 2024"
                location="XXX, XXX"
                content=" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
            </div>

            <div className="relative mb-20">
              <Shape />
              <Item
                className="translate-x-[104px] md:translate-x-[82px]"
                title="EXCHANGE SEMESTER"
                description="XXX"
                date="Aug 2023-Jan 2024"
                location="XXX, XXX"
                content=" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
            </div>

            <div className="relative mb-32">
              <Shape />
              <Item
                className="translate-x-[104px] md:translate-x-[82px]"
                title="SOFTWARE ENGINEER INTERN"
                description="XXX"
                date="Feb-Jul 2025"
                location="XXX, XXX"
                content=" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
            </div>
            <BottomShape />
          </div>
          <Item
            title="JUNIOR SOFTWARE ENGINEER"
            description="XXX"
            date="Aug 2025 - Undefined"
            location="XXX, XXX"
            content=" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          />
        </div>
      </div>
    </div>
  );
}
