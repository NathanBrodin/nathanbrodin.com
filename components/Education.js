import Link from "next/link";

export default function Education() {
  return (
    <div className="px-32 flex flex-col gap-8">       
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 h-32 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full mr-16">
            <Link href={"https://www.esiea.fr/"} passHref={true}>
              <a target="_blank">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-200">ESIEA - IT ENGINEERING</h3>
              </a>
            </Link>
            <div className="flex justify-between">
              <p className="text-base font-light text-gray-400">Master's degree in software engineering</p>
              <p className="text-base font-light text-gray-400">2020 - 2025</p>
            </div>
            <p className="text-base font-light text-gray-400">Laval, France</p>
            <br />
            <p className="text-base font-light text-gray-400">Algorithms and C programming, mathematics and cryptography, physics and digital electronics, soft skills and management, English.</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 h-32 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full mr-16">
            <Link href={"https://net.centria.fi/en/"} passHref={true}>
              <a target="_blank">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-200">CENTRIA UNIVERSITY OF APPLIED SCIENCES</h3>
              </a>
            </Link>
            <div className="flex justify-between">
              <p className="text-base font-light text-gray-400">Information technology exchange semester</p>
              <p className="text-base font-light text-gray-400">Aug-Dec 2022</p>
            </div>
            <p className="text-base font-light text-gray-400">Kokkola, Finland</p>
            <br />
            <p className="text-base font-light text-gray-400">POO, Python, C#, databases and SQL,  statistics, operating 	system, project management, English.</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 h-32 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full mr-16">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-200">AMBROISE PARE HIGH SCHOOL</h3>
            <div className="flex justify-between">
              <p className="text-base font-light text-gray-400">General certificate of education, Economy</p>
              <p className="text-base font-light text-gray-400">2017-2020</p>
            </div>
            <p className="text-base font-light text-gray-400">Laval, France</p>
          </div>
        </div>
    </div>
  )
}
