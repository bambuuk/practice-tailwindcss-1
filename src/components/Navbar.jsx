import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(nav => !nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ease-in-out duration-300">React</h1>
      <ul className="hidden md:flex">
        <li className="m-2 p-2 cursor-pointer hover:text-[#00df9a] transition-colors">Home</li>
        <li className="m-2 p-2 cursor-pointer hover:text-[#00df9a] transition-colors">Company</li>
        <li className="m-2 p-2 cursor-pointer hover:text-[#00df9a] transition-colors">Resources</li>
        <li className="m-2 p-2 cursor-pointer hover:text-[#00df9a] transition-colors">About</li>
        <li className="m-2 p-2 cursor-pointer hover:text-[#00df9a] transition-colors">Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed left-[-100%] ease-in-out duration-500' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React</h1>
        <ul className='p-4 uppercase'>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;