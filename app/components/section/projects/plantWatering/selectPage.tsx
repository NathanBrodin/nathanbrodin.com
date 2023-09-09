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
    <div className="flex h-full w-full flex-col gap-2 bg-[#EEEBE5] p-2 lg:p-4">
      <div className=" text-[#1B4139]">
        <div className="text-xs font-bold lg:text-sm">Need some changes ?</div>
        <div className="text-[8px] lg:text-xs">
          Select a plant, or create one !
        </div>
      </div>
      <div className="no-scrollbar overflow-y-scroll transition">
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
