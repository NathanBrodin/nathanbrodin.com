import HomePage from "./homePage";
import SelectPage from "./selectPage";

export default function PlantWatering() {
  return (
    <div className="relative h-full w-full">
      <SelectPage />
      <HomePage />
    </div>
  );
}
