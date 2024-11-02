import React from 'react'
import { BackgroundGradientDemo } from './compo'

export default function Features() {
  return (
    <div className='my-10 '>
        <div className=''>
            <h2 className='text-[2.6rem] font-bold text-center text-blue-600'>Features</h2>
        </div>
        <div className=' mx-5 justify-center pt-10 sm:grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
        <BackgroundGradientDemo title={'Complete Data Ownership'} desc={'Patients fully control their health data, with the power to grant and revoke access anytime.'} img={'/decen.svg'} height={250} width={250} classs={'object-contain p-3 '}/>
        <BackgroundGradientDemo title={'Advanced Security & Privacy with Blockchain'} desc={'Blockchain and Zero-Knowledge Proofs protect sensitive health data, ensuring top-tier privacy and security.'} img={'/secure.svg'} height={250} width={250} classs={'p-3 object-contain mx-auto mb-10'}/>
        <BackgroundGradientDemo title={'Decentralized Data Storage'} desc={'Decentralized storage removes single points of failure, keeping health records safe and always accessible.'} img={'/storage.svg'} height={170} width={170} classs={'object-contain mb-0 p-3 flex justify-center ml-6  '}/>
        <BackgroundGradientDemo title={'Easy Integration with Healthcare Systems'} desc={'Seamlessly integrates with hospitals, clinics, and telemedicine platforms, unifying data across systems.'} img={'/healthcare.svg'} height={250} width={250} classs={'object-contain mb-[28px] p-3 ml-4'}/>
        </div>
    </div>
  )
}
