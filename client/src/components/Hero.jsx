import { setGlobalState, useGlobalState } from '../store';
import ProjectAccount from './ProjectAccount';
import StartProject from './StartProject';
// import ProjectAccount from './ProjectAccount';
import './main.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="bckGround text-center text-purple-500 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12"
      >
        <span className=" gradient__text capitalize">Bring creative projects to life on</span>
        <br />
        <span className="gradient__text uppercase text-600">Bestowal.</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <Link to={'/createProjectAccount'}><button
          type="button"
          className="inline-block px-7 py-3 mr-2 bg-orange-600
        text-white font-medium text-xs leading-snug uppercase shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 rounded-full active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        >
          Add Project with bank account..
        </button></Link>
        <button
          type="button"
          className="inline-block px-7 py-3 mr-2 bg-orange-600
        text-white font-medium text-xs leading-snug uppercase shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 rounded-full active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project with Eth..
        </button>

        <button
          className="inline-block px-7 py-3 bg-transparent text-orange-600 font-medium text-sm leading-snug uppercase hover:text-orange-700 hover:bg-gray-100
        focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200
        transition duration-150 ease-in-out rounded-full"
        >
          Back Projects
        </button>
      </div>
      <div className="mt-10 text-white font-bold text-xl"><button>Crypto  Details</button></div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalDonations || 0}
          </span>
          <span>Donated</span>
        </div>
      </div>
      <div className="mt-10 text-white font-bold text-xl"><button>Bank Details</button></div>
      <StartProject/>
      <ProjectAccount/>
    </div>
  )
}

export default Hero
