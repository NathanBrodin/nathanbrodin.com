

export default function Awards() {
  return (
    <div className="flex flex-col items-center gap-16 my-24">
        <div className="flex flex-col items-center hover:scale-110 transition ease-in-out duration-300">
            <h3 className="text-xl font-bold mb-2 text-gradient bg-gradient-to-r from-gradient-start to-gradient-end">WINNER OF THE SECOND PRIZE AT THE PST LAVAL 2022 SHOW</h3>
            <p className="text-base font-light text-gray-400">Rewarded for my project «Esieabot mobile application» among 20 projects of 2nd year students.</p>
        </div>  
        <div className="flex flex-col items-center hover:scale-110 transition ease-in-out duration-300">
            <h3 className="text-xl font-bold text-gradient bg-gradient-to-r from-gradient-start to-gradient-end mb-2">WINNER ROBORAVE CRAON 2022</h3>
            <p className="text-base font-light text-gray-400">Coach of 6 teams of middle school students during the RoboRave robotic contest. 1 winning team of the Line-Following contest, 3rd and 4th place in the SumoBot.</p>
        </div> 
    </div>
  )
}
