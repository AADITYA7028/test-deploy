import React from 'react'
import myImage from "../assets/Frame 1000003104.png";
export default function NameLogo({padding}) {
  return (
    <div className="px-18 py-6 flex gap-2 items-center" style={{padding : padding}}>
        {/* Image - Fixed to 40px x 40px */}
        <div className="w-[40px] h-[40px] ">
          <img src={myImage} alt="Icon" className="w-full h-full object-contain" />
        </div>

        {/* Text */}
        <span className="w-[102px] h-[36px] font-[Nexa-Bold] text-[28px] leading-[100%] flex items-center text-white whitespace-nowrap overflow-hidden  tracking-[0.02em]text-ellipsis">
          verifier
        </span>
      </div>
  )
}
