import { gsap } from "gsap";
import { useEffect } from "react";

const Home = () => {

  
  useEffect(() => {
    const homediv = document.getElementById("home-div")
    const bgimg = document.getElementById("bgimg")

      homediv.addEventListener("mouseenter",()=>{
        gsap.to("#bgimg", {
          y:0,
          display:"block",
          scale:1,
          duration:0.5
        });
      })
      homediv.addEventListener("mouseleave",()=>{
        gsap.to("#bgimg", {
          y:300,
          scale:0,
          duration:0.5
        });
      })

     homediv.addEventListener("mouseenter",()=>{
      gsap.to("#Hedline", {
        y:300,
        scale:0,
        duration:0.5

       });
     })

     homediv.addEventListener("mouseleave",()=>{
      gsap.to("#Hedline", {
        y:0,
        scale:1,
        duration:0.5

       });
     })
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className='flex justify-between items-center p-10  '>
      <div className='w-[170px] font-sans font-semibold  bottom-[0px]'>
        <span className="text-amber-500 text-4xl">"</span>
        <p className="bg-gradient-to-r from-gray-900 to-amber-500 bg-clip-text text-transparent">
          Passionate full stack dev building clean, performant apps with <i className="ri-reactjs-fill"></i>, <i className="ri-nodejs-fill"></i>, <i className="ri-leaf-line"></i> . Let’s create impactful, real-world solutions!

</p>

      
      </div>



      <div className='flex flex-col justify-center items-center' id="home">
        <div id="Hedline">
        <center>
          <button className='font-sans font-semibold border  px-4 py-2 rounded-4xl text-3xl'>Hello!</button>
          <h1 className='font-sans text-7xl'>I'm <span className='font-bold text-amber-500'>ManojKumar</span></h1>
          <h1 className='text-7xl'>Professional Web Developer</h1>
        </center>
      </div>
        <div/>
        <div className="relative w-[100%] h-[100%] top-[-75px] ">


          <div className="bg-amber-500 w-[600px] h-[400px] absolute top-[250px] left-[18%] rounded-t-full " id="home-div">
            <img className="w-[800px] h-[800px]  absolute hidden top-[-500px]   overflow-hidden " src="public/model 1 bg.svg" alt="" id="bgimg" />
            <img src="https://i.postimg.cc/zBFG4vr4/my-photo-removebg-preview-1.png" alt="" className="absolute top-[-200px] w-[600px] h-[600px] overflow-hidden" />
            <div className="bg-[rgba(255,255,255,0.32)] w-[300px] h-[80px] absolute bottom-[50px] left-[150px] rounded-3xl flex justify-around items-center">
              <button className=''>Portfolio</button><button className=' font-sans font-semibold bg-amber-500 py-6 px-15 text-stone-50 text-2xl  rounded-3xl'>Hire Me <i className="ri-arrow-right-up-line"></i></button>
            </div>
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