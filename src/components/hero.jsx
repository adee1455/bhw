"use client";
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';


export default function Hero() {
    const router = useRouter();
  return (
    <div className=' sm:mt-32 mt-20 mb-6'>
      <div className='flex sm:flex-row flex-col'>
        <div className='sm:w-2/4'>
            <div className=' my-12 w-full text-center justify-center sm:p-10 p-3'>
            <div className=' flex justify-center pb-2'>
            <button className="px-2 py-1 rounded-full relative bg-slate-100 text-red-800 text-xs font-medium disabled transition duration-200 border border-slate-600">
                        <div className="absolute inset-x-0  w-1/3 mx-auto  shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">
                          On Base Network Only!
                        </span>
            </button>
            </div>
                <h2 className='font-extrabold text-blue-600 sm:text-5xl text-4xl sm:leading-tight sm:tracking-normal items-center'>Blockchain Health <br/> Wallet</h2>
                <p className='pt-5 font-semibold font-mono text-sm '>Easily upload, lock and unlock your files with customizable access periods and authorized users.</p>
                <div className='flex pt-6 justify-center'>
                <div className='bg-blue-500 text-white rounded-2xl m-0 p-0'>
                    <w3m-button balance='hide'/>
                </div>
                    {/* <button onClick={()=> router.push('/App')} className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                         <div className="px-8 py-2 font-bold  bg-blue-800 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                             Connect Wallet
                        </div>
                    </button> */}
                </div>
            </div>
           
        </div>
        <div className='flex mx-auto'>
            <Image src={'/hero.svg'} width={400} height={400}></Image>
        </div>
      </div>
    </div>
  )
}
