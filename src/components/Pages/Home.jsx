import { gsap } from "gsap";
import { useEffect } from "react";
const Home = () => {


  return (
    <div className='flex justify-between items-center p-10'>
      <div className='w-[170px] font-sans font-semibold '>
        <span className="text-amber-500 text-4xl">"</span>
        <p className="bg-gradient-to-r from-gray-900 to-amber-500 bg-clip-text text-transparent">
          Passionate full stack dev building clean, performant apps with <i class="ri-reactjs-fill"></i>, <i class="ri-nodejs-fill"></i>, <i class="ri-leaf-line"></i> . Let’s create impactful, real-world solutions!
</p>
      </div>



      <div className='flex flex-col justify-center items-center' id="home">
        <center>
          <button className='font-sans font-semibold border  px-4 py-2 rounded-4xl text-3xl'>Hello!</button>
          <h1 className='font-sans text-7xl'>I'm <span className='font-bold text-amber-500'>ManojKumar</span></h1>
          <h1 className='text-7xl'>Professional Web Developer</h1>
        </center>
        <div className="relative w-[100%] h-[100%] top-[-75px] ">


          <div className="bg-amber-500 w-[600px] h-[400px] absolute top-[250px] left-[18%] rounded-t-full ">
            <img src="https://i.postimg.cc/zBFG4vr4/my-photo-removebg-preview-1.png" alt="" className="absolute top-[-200px] w-[600px] h-[600px] overflow-hidden" />
          </div  >
        </div>
      </div>




      <div className='flex flex-col justify-center items-end '>
        <span className='text-yellow-500 text-3xl'><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></span>
        <h3 className='text-3xl font-black '>1 Years</h3>
        <p>Experience</p>
      </div>
    </div>
  )
}

export default Home