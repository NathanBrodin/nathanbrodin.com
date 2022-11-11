import Play from "../public/icons/play.svg";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";

export default function TooltipLink(props) {
  const [isShowing, setIsShowing] = useState(false);

  if (props.text === "") {
    return null;
  }

  function handleClick() {
    window.open(props.link, "_blank");
  }

  return (
    <Popover className="relative">
      <Popover.Button
        className="px-2 py-2 focus:outline-none"
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
        onClick={handleClick}
      >
        <Link href={props.link} passHref={true}>
          <a target="_blank">
            <Play className="h-6 w-6 fill-transparent stroke-primary-200 stroke-2 hover:stroke-yellow-300" />
          </a>
        </Link>
      </Popover.Button>
      <Transition
        show={isShowing}
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="left-100 absolute z-10 -translate-x-2/3 transform">
          <div className="rounded-lg bg-primary-300/70 px-3 py-2 shadow-lg">
            <p className="whitespace-nowrap text-sm font-medium text-white">
              {props.text}
            </p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
