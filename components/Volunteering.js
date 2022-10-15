
export default function Volunteering() {
  return (
    <div className="sm:px-32 flex flex-col gap-8">       
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full sm:mr-16">
              <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">ASSISTANT AT THE ROBORAVE</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">Support for 23 students at the RoboRave</p>
              <p className="text-sm sm:text-base font-light text-gray-400">Jun 2022</p>
            </div>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">The RoboRave is a regional robotics competition for middle school students. We helped and accompanied them during the RoboRave after training them for a year.</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full sm:mr-16">
              <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">EDUCATIONAL ASSISTANT</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">Animation of robotic courses for middle school students</p>
              <p className="text-sm sm:text-base font-light text-gray-400">Sep 2021 - Jun 2022</p>
            </div>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">We organized and ran robotics and programming classes for 5th and 4th graders every Thursday at Fernand Puech College.</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full sm:mr-16">
            <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">PROGRAMMING WORKSHOP</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">Animation of Python courses for children</p>
              <p className="text-sm sm:text-base font-light text-gray-400">Oct 2020 - Jun 2021</p>
            </div>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">Python programming courses for young people at the CLEP leisure center in Laval</p>
          </div>
        </div>
    </div>
  )
}
