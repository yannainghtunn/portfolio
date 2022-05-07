import './App.css';
import PF from "./assets/pf.jpg";
import Vector from "./assets/vector2.jpg";
import {motion} from "framer-motion";
import Skill from './component/Skill';
function App() {
  return (
    <div className='min-h-screen w-screen box-border flex flex-col'>
      <p className='text-center text-white text-2xl md:text-3xl font-extrabold my-10'>Welcome To My Portfolio</p>
      <div className='p-4 w-[95%] m-auto md:w-4/5 lg:w-3/5 bg-opacity-10 backdrop-filter backdrop-blur-sm7  bg-white border border-white border-opacity-20 rounded-lg mt-0 box-border flex-1'>  
        <img src={PF} className="w-[200px] h-[200px] backdrop-filter backdrop-blur-xl p-2 bg-white bg-opacity-20 border border-white border-opacity-80  rounded-full object-cover mx-auto"/>
        <p className='text-center text-black font-extrabold mt-3 text-xl '>Yan Naing Htun</p>
        <p className='font-bold text-center my-2'>yannainghtun112358@gmail.com</p>
        <div className='text-center border-t-4 mt-2 py-3 border-white border-opacity-20'>
          <p className='font-extrabold text-2xl mb-2'>Skills</p>
          <div className='w-full py-4 px-2 rounded-md border border-white border-opacity-20 bg-white bg-opacity-20 backdrop-blur-xl backdrop-filter'>
            <Skill name="Java" percent={90}/>
            <Skill name="Flutter" percent={80}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
