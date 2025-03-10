import React from 'react'
import NameLogo from './NameLogo'

export default function Footer() {
  return (
    <div className="w-full h-[300px] flex items-center justify-evenly">

        <div className="w-[438px] h-[120px] flex flex-col  justify-center items-start gap-[20px] ">
            <NameLogo padding="0px"/>
           
                <div className="w-[438px] h-[60px] flex  flex-col gap-[10px] ">
                <p className="w-[260px] h-[18px] font font-medium text-[16px] text-[#F0F0F0]">2024 Verifier. All rights reserved.</p>
                <p className="w-[438px] h-[32px] font font-normal text-[14px] text-[#A3A3A3] ">All trademarks, logos, and brand names are the property of their respective owners.</p>
            </div>
        </div>

        <div className="w-[400px] h-[18px] flex justify-between">
            <p className="w-[176px] h-[18px] font font-medium text-[16px] text-[#F0F0F0]">Terms and conditions</p>
            <p className="w-[111px] h-[18px] font font-medium text-[16px] text-[#F0F0F0]">Privacy policy</p>
        </div>
    </div>
  )
}
