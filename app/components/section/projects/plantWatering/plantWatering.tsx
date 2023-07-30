import HomePage from "./homePage";
import SelectPage from "./selectPage";

export default function PlantWatering() {
  return (
    <div className="flex px-40 ">
      <div className="w-1/2 flex justify-center">
        <SelectPage />
        <HomePage />
      </div>
      <div className="space-y-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 w-1/2">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">Plant Watering mobile app</div>
          <div className="w-4">
            <svg
              stroke-width="3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                stroke="#000000"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className="text-slate-600">
          This project entails a hardware-based plant watering system
          accompanied by a mobile application designed for plant status
          monitoring. <br /> <br />
          The hardware setup includes sensors for detecting moisture levels,
          temperature, and light exposure, while the mobile app allows users to
          remotely receive real-time updates on plant conditions. <br /> <br />
          The system aims to provide an efficient and convenient method for
          plant care management.
        </div>
        <div>
          <div className="font-bold">Tech Stack</div>
          <div>Flutter</div>
        </div>
      </div>
    </div>
  );
}
