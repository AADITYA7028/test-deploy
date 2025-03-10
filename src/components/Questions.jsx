import React from 'react'
import Accordion from "../components/Accordion";

export default function Questions() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-[52] items-center mt-[50px]">

        <div className="w-[815px] h-[65px] font font-medium text-[58px] text-[#F0F0F0] mb-[52px]">Frequently asked questions</div>

        <div> <Accordion/> </div>
    </div>
    
  )
}
