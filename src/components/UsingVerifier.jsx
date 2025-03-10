import React from 'react'
import People from '../assets/people.svg'
import Comp from '../assets/comp.svg'
import Services from '../assets/services.svg'
import Sound from '../assets/sound.svg'
import Desk from '../assets/desk.svg'

export default function UsingVerifier() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-[1140px]  flex flex-col items-center gap-[80px] ">

           <div className="w-[641px]  flex gap-[24px] font font-medium text-[58px] text-[#F0F0F0]">Who is using Verifier?</div>
           
<div className="w-full  flex flex-col  gap-[32px] items-center">

<div className="w-full flex gap-[10px]">
<div className="w-1/3 flex flex-col gap-2">
   <div className="w-full h-[170px] flex flex-col  bg-[radial-gradient(100%_100%_at_50%_0%,_#272436_0%,_#0B081C_50.32%,_#09061A_100%)] rounded-[16px] p-4 border-[1px] border-[#484554]
"> 
    <img src={People} alt="img" className="w-[60px] h-[60px] mb-5" />

    <p className="w-[333px] font font-medium text-[24px] text-[#F0F0F0] ">Sales and marketing teams</p>

   </div>

   <div className="w-full h-[170px] flex flex-col  bg-[radial-gradient(100%_100%_at_50%_0%,_#272436_0%,_#0B081C_50.32%,_#09061A_100%)] rounded-[16px] p-4 border-[1px] border-[#484554]">
   <img src={Comp} alt="img" className="w-[60px] h-[60px] mb-5" />
   
   <p className="w-[300px] font font-medium text-[24px] text-[#F0F0F0] ">Software & IT companies</p>

   </div> 

   
</div>

<div className="w-1/3 flex flex-col h-[348px] rounded-[16px] bg-[radial-gradient(100%_100%_at_50%_0%,_#272436_0%,_#0B081C_50.32%,_#09061A_100%)] p-4 border-[1px] border-[#484554] ">
 <div className="w-[267px] font text-[36px]  text-[#EEEEEE] mb-[55px]">Irreplaceable tool for businesses</div>

 <img src={Services} alt="img" className="w-[60px] h-[60px] mb-5" />
 <div className="w-[209px] h-[29px] font font-medium text-[24px] text-[#F0F0F0]">Service providers</div>

</div>

<div className="w-1/3 gap-2 flex flex-col">
<div className="w-full h-[170px] flex flex-col  bg-[radial-gradient(100%_100%_at_50%_0%,_#272436_0%,_#0B081C_50.32%,_#09061A_100%)] rounded-[16px] p-4 border-[1px] border-[#484554]
"> 
    <img src={Sound} alt="img" className="w-[60px] h-[60px] mb-5" />

    <p className="w-[333px] font font-medium text-[24px] text-[#F0F0F0] ">Recruiters</p>

   </div>

   <div className="w-full h-[170px] flex flex-col  bg-[radial-gradient(100%_100%_at_50%_0%,_#272436_0%,_#0B081C_50.32%,_#09061A_100%)] rounded-[16px] p-4 border-[1px] border-[#484554]">
   <img src={Desk} alt="img" className="w-[60px] h-[60px] mb-5" />
   
   <p className="w-[300px] font font-medium text-[24px] text-[#F0F0F0] ">Backlinks outreach</p>

   </div> 
</div>

</div>


<button className="w-[140px] h-[52px]  rounded-[12px] px-[32px] py-[14px] flex items-center justify-center gap-[8px] bg-gradient-to-r from-[#531FAD] via-[#3A78D0] to-[#1683DC] border border-gray-500">
              <div className="w-[76px] h-[24px] font text-medium text-[20px] text-[#FFFFFF]">
                Dive in!
              </div>
            </button>
</div>
            
           

        </div>
    </div>
  )
}
