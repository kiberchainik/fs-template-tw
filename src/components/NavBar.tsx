import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='fixed top-0 flex w-full flex-wrap items-center justify-between bg-white py-3 px-5 shadow-xl'>
      <a href="/" className='hover:cursor-pointer'>
        <div className='flex flex-col text-center'>
          <div className='font-bold text-[30px]'>
            <span className='text-find-yellow'>Find</span>
            <span className='text-sol-sky'>Solution</span>
          </div>
          <div className='font-caveat text-[24px]'><span className=''>a un clic da te</span></div>
        </div>
      </a>
      <nav className="flex justify-between py-5">
        <ul className="list-none flex justify-center space-x-4">
          <li><NavLink className='rounded-full px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900' to='/'>Home</NavLink></li>
          <li><NavLink className='rounded-full px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900' to='/candidats'>Candidats</NavLink></li>
          <li><NavLink className='rounded-full px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900' to='/vacancies'>Vacancies</NavLink></li>
          <li><NavLink className='rounded-full px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900' to='/about'>About</NavLink></li>
          <li><NavLink className='rounded-full px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900' to='/contacts'>Contacts</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar