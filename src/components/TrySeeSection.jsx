import React from 'react'

export default function TrySeeSection() {
  return (
    <div className="w-full min-h-screen  flex flex-col  justify-center items-center bg-gradient-to-b from-[rgba(28,34,50,0.4)] to-[hsla(229,81%,4%,1)] gap-[60px]
">
     <p className="w-[610px] h-[152px] font font-semibold text-[74px] text-[#EEEEEE] text-center">TrySee Verifier in action</p>

     <button className="w-[140px] h-[52px]  rounded-[12px] px-[32px] py-[14px] flex items-center justify-center gap-[8px] bg-gradient-to-r from-[#531FAD] via-[#3A78D0] to-[#1683DC] border border-gray-500">
              <div className="w-[76px] h-[24px] font text-medium text-[20px] text-[#FFFFFF]">
                Dive in!
              </div>
            </button>
    
    </div>
  )
}
