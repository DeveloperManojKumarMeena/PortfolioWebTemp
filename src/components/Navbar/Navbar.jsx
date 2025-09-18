import gsap from 'gsap'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

  useEffect(() => {
     
  }, [])



  return (
    <div className='bg-[black] text-white p-3 w-[80%] rounded-4xl m-auto flex justify-around items-center mt-5'>
      <NavLink className={({ isActive }) => (isActive ? 'bg-amber-500 px-7 py-5 rounded-4xl text-2xl' : '')} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'bg-amber-500 px-7 py-5 rounded-4xl text-2xl' : '')} to="/about">About</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'bg-amber-500 px-7 py-5 rounded-4xl text-2xl' : '')} to="/services">Services</NavLink>
      <div className='flex items-center flex-col'>
        
        <div className='bg-[#fd853a] rounded-full w-8 h-8 flex items-center justify-center '>MK</div>
        <span className='ml-2 text-amber-500 font-extrabold'>Manoj Kumar</span>
      </div>
      <NavLink className={({ isActive }) => (isActive ? 'bg-amber-500 px-7 py-5 rounded-4xl text-2xl' : '')} to="/contact">Contact</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'bg-amber-500 px-7 py-5 rounded-4xl text-2xl' : '')} to="/resume">Resume</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'bg-amber-500 px-7 py-5 rounded-4xl text-2xl' : '')} to="/project">Project</NavLink>
    </div>
  )
}

export default Navbar