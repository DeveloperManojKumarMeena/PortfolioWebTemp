import gsap from 'gsap'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  useEffect(() => {
     
  }, [])



  return (
    <div className='bg-[black] text-white p-3 w-[80%] rounded-4xl m-auto flex justify-around items-center mt-5'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <div className='flex items-center flex-col'>
        
        <div className='bg-[#fd853a] rounded-full w-8 h-8 flex items-center justify-center '>MK</div>
        <span className='ml-2 text-amber-500 font-extrabold'>Manoj Kumar</span>
      </div>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/project">Project</Link>
    </div>
  )
}

export default Navbar