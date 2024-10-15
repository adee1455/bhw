"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAppKitAccount } from '@reown/appkit/react';

const Navbar = () => {
const conn = useAppKitAccount().address;
const router = useRouter();

if(conn !== undefined) {
  router.push('/profile');
}

  return (
    <div>
  <nav className="backdrop-blur-sm  fixed w-full h-[73px] bg-white  z-20 top-0 start-0 ">
  <div className ="max-w-screen-xl flex flex-wrap items-center dark:text-blue-600 text-blue-600  justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <img src="/logo2.png" class="sm:h-12 h-10" alt=" Logo"/> */}
      <span className="self-center font-mono md:text-3xl text-2xl  sm:font-semibold font-bold whitespace-nowrap ">BHW</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div className='bg-blue-500 text-white rounded-2xl m-0 p-0'>
      <w3m-button balance='hide'/>
      </div>
<button onClick={() => document.getElementById('dropdown').classList.toggle('hidden')} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="dropdown" aria-expanded="false" aria-hidden="true">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 backdrop-blur-md" id="dropdown">
    <ul className="flex flex-col sm:text-black text-white  p-4 md:p-0 mt-4 font-medium backdrop-blur-md border border-gray-100 rounded-lg sm:bg-indigo-900  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
    <li>
        <a onClick={() => router.push('/')} className="block py-2 px-3  rounded   sm:bg-transparent bg-indigo-900  dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3  rounded     sm:bg-transparent bg-indigo-900 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a onClick={() => router.push('/App')} className="block py-2 px-3  rounded  sm:bg-transparent bg-indigo-900   dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700">App</a>
      </li>
     
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
