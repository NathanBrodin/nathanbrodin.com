import { Play } from "lucide-react";
import Image from "next/image";

interface DirectionPadProps {
  onMove: Function;
}

export default function DirectionPad({ onMove }: DirectionPadProps) {
  return (
    <div className="absolute bottom-0 left-1/2 mb-4 grid -translate-x-1/2 grid-cols-3 grid-rows-3 text-white">
      <div></div>
      <button
        onClick={() => onMove("up")}
        className="flex content-center justify-center rounded-t-lg bg-[#627678] p-1 hover:opacity-75"
      >
        <Play className="h-6 w-6 -rotate-90 fill-white" />
      </button>
      <div></div>
      <button
        onClick={() => onMove("left")}
        className="flex content-center justify-center rounded-l-lg bg-[#627678] p-1 hover:opacity-75"
      >
        <Play className="h-6 w-6 rotate-180 fill-white" />
      </button>
      <div className="flex content-center justify-center bg-[#627678] hover:opacity-75">
        <Image src={"/sokoban/player.png"} alt="icon" width={32} height={24} />
      </div>
      <button
        onClick={() => onMove("right")}
        className="flex content-center justify-center rounded-r-lg bg-[#627678] p-1 hover:opacity-75"
      >
        <Play className="h-6 w-6 fill-white " />
      </button>
      <div></div>
      <button
        onClick={() => onMove("down")}
        className="flex content-center justify-center rounded-b-lg bg-[#627678] p-1 hover:opacity-75"
      >
        <Play className="h-6 w-6 rotate-90 fill-white" />
      </button>
      <div></div>
    </div>
  );
}
