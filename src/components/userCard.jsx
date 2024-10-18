"use client";
import Image from 'next/image'
import ShareButton from '@components/shareButton'
import { useState } from 'react';


export default function UserCard() {
    const [copied,setCopied] = useState(false);
    const link = '1098-1455-8767';
    const copylink = (e) => {
        navigator.clipboard.writeText(link);
        setCopied(true);
      }
    return (
      <div className="bg-gray-100 p-4 h-60 max-w-xl w-[600px] mx-auto rounded-md ">
        <div className="flex items-start mb-4">
          <Image
            src="/pp.jpeg?height=48&width=48"
            alt="Adee Shaikh"
            width={48}
            height={48}
            className="rounded-full mr-3"
          />

          <div className="flex-grow">
            <h2 className="text-base font-semibold text-gray-800">Adee Shaikh</h2>
            <p className="text-xs text-gray-600">0x71....B5b05bF00</p>
          </div>
          <div className='p-1'>
           <button><img src="/scanner.svg" alt="" srcset="" /></button>
          </div>
          </div>
          <div className="text-right mb-12 mt-6">
            <p className="text-sm text-center text-gray-600">Health ID</p>
            <p className="text-2xl text-center font-bold text-gray-800">1098-1455-8767</p>
          </div>
       
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-medium py-2 px-4 rounded flex text-center items-center justify-center">
            Share <div className='ml-3 flex items-center'><ShareButton link={link} /></div>
          </button>
          
          <button onClick={copylink} className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-medium py-2 px-4 rounded">
          {copied ? 'Copied' :  'Copy Id'}
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-medium py-2 px-4 rounded">
            View Profile
          </button>
        </div>
      </div>
    )
  }