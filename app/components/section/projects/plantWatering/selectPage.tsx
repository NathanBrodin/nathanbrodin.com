import { PlantItemProps } from ".";
import PlantItem from "./plantItem";

interface SelectPageProps {
  plantList: PlantItemProps[];
  setCurrentPlant: Function;
}

export default function SelectPage({
  plantList,
  setCurrentPlant,
}: SelectPageProps) {
  return (
    <div className="flex flex-col gap-2 w-full h-full p-2 lg:p-4 bg-[#EEEBE5]">
      <div className=" text-[#1B4139]">
        <div className="font-bold text-xs lg:text-sm">Need some changes ?</div>
        <div className="text-[8px] lg:text-xs">
          Select a plant, or create one !
        </div>
      </div>
      <div className="overflow-y-scroll no-scrollbar transition">
        {plantList.map((plant, index) => {
          return (
            <PlantItem
              handlePlantSelect={() => {
                const newPlantList = [...plantList];
                const selectedPlant = newPlantList.splice(index, 1)[0];
                newPlantList.unshift(selectedPlant);
                setCurrentPlant(newPlantList);
              }}
              plant={plant}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
