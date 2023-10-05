import { ElementProps } from "../homePage";

export default function Temperature({ value }: ElementProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-[#FBB242] text-white">
      <div className="text-xs font-bold lg:text-sm">{value}°</div>
      <div className="text-[8px] lg:text-xs">of temperature</div>
    </div>
  );
}
