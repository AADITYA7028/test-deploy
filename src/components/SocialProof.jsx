import React from 'react'
import sentry from "../assets/sentry ecom.svg";
import xlr from "../assets/xlr media.svg";
import outreach from "../assets/outreach clerk.svg";
import og from "../assets/og.svg";
import acex from "../assets/acexmedia.png";

export default function SocialProof() {
  return (

<div className="w-full flex flex-col items-center gap-[40px] mt-20 pb-20">
  
  {/* Paragraph - Centered */}
  <p className="w-[447px] h-[30px] font font-normal text-[24px] leading-[125%] tracking-[0%] text-center text-[#E0E0E0]">
    Modern companies are using <span className="font-semibold">Verifier</span>
  </p>

  {/* ✅ New Div Below Paragraph (Maintaining Original Layout) */}
  <div className="w-[1080px] h-[43.07px] flex justify-between items-center ">
   

    {/* Image with given width, height, and gap */}
  <img 
    src={sentry} 
    alt="First Image" 
    className="w-[257.46px] h-[30.28px] object-contain"
  />
 
 {/* Second Image */}
 <img 
    src={xlr}
    alt="Second Image" 
    className="w-[190.03px] h-[30.28px] object-contain"
  />

  {/* Third Image */}
  <img 
    src={outreach}
    alt="Third Image" 
    className="w-[104.96px] h-[42.85px] object-contain"
  />

  {/* Fourth Image */}
  <img 
    src={og} 
    alt="Fourth Image" 
    className="w-[58.56px] h-[36.92px] object-contain"
  />

  {/* Fifth Image */}
  <img 
    src={acex} 
    alt="Fifth Image" 
    className="w-[77px] h-[43.07px] object-contain"
  />

  </div>

</div>


  )
}
