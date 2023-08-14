import { Play } from "lucide-react";
import Image from "next/image";

interface DirectionPadProps {
  onMove: Function
}

export default function DirectionPad({onMove}: DirectionPadProps) {
  return (
    <div className="absolute bottom-0 mb-4 text-white left-1/2 -translate-x-1/2 grid grid-rows-3 grid-cols-3">
      <div></div>
      <button  onClick={() => onMove('up')} className="bg-[#627678] hover:opacity-75 flex content-center justify-center p-1 rounded-t-lg">
        <Play className="fill-white w-6 h-6 -rotate-90" />
      </button>
      <div></div>
      <button onClick={() => onMove('left')} className="bg-[#627678] hover:opacity-75 flex content-center justify-center p-1 rounded-l-lg">
        <Play className="fill-white w-6 h-6 rotate-180" />
      </button>
      <div className="bg-[#627678] hover:opacity-75 flex content-center justify-center">
        <Image src={"/sokoban/player.png"} alt="icon" width={32} height={24} />
      </div>
      <button onClick={() => onMove('right')} className="bg-[#627678] hover:opacity-75 flex content-center justify-center p-1 rounded-r-lg">
        <Play className="fill-white w-6 h-6 " />
      </button>
      <div></div>
      <button onClick={() => onMove('down')} className="bg-[#627678] hover:opacity-75 flex content-center justify-center p-1 rounded-b-lg">
        <Play className="fill-white w-6 h-6 rotate-90" />
      </button>
      <div></div>
    </div>
  );
}
