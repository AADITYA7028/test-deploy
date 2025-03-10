

// import React from 'react';

// export default function HowItWorks() {
//   return (
//     <div className="w-[884px] h-[399px] absolute top-[926px] left-[198px] flex flex-col justify-center gap-[72px] bg-gray-300">
      
//       {/* New Inner Div */}
//       <div className="w-[513px] h-[111px] flex flex-col block items-center justify-center gap-[24px] bg-gray-500">
        
//         {/* Text Inside Inner Div */}
//         <div className="w-[382px] h-[65px] text-[#F0F0F0] font font-medium text-[58px] leading-[112%] tracking-[0%] text-center">
//           How it works
//         </div>


//           {/* ✅ New Child Div Below (Description) */}
//         <div className="w-[513px] h-[22px] text-[#E0E0E0] font  font-normal text-[18px] leading-[100%] tracking-[0%] text-center">
//           It’s super easy to verify your email addresses with Verifier.
//         </div>


//       </div>

//            {/* ✅ Sibling Div */}
//       <div className="w-[884px] h-[216px] flex  gap-[115px] bg-gray-900">
//         {/* Add content inside this sibling div as needed */}c sdf
//       </div>



//     </div>
//   );
// }



import React from 'react';
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

export default function HowItWorks() {
  return (
    <div className="w-full flex items-center flex-col gap-[72px] py-20">
      
      {/* ✅ Inner Div (Title & Description) */}
      <div className="w-[513px] h-[111px] flex flex-col items-center gap-[24px] ">
        
        {/* Title */}
        <div className="w-[382px] h-[65px] text-[#F0F0F0] font font-medium text-[58px] leading-[112%] tracking-[0%] text-center">
          How it works
        </div>

        {/* Description */}
        <div className="w-[513px] h-[22px] text-[#E0E0E0] font font-normal text-[18px] leading-[100%] tracking-[0%] text-center">
          It’s super easy to verify your email addresses with Verifier.
        </div>

      </div>

      {/* ✅ Sibling Div - Placed Below Inner Div */}
      <div className="w-[884px] h-[216px] flex gap-[115px] ">
        

        {/* ✅ New Inner Div inside Sibling Div */}
        <div className="w-[218px] h-[216px] flex flex-col items-center gap-[36px] ">
          <img src={icon1} alt="Image 1" className="w-[100px] h-[100px]" />

          <div className="w-[218px] h-[80px] flex   flex-col justify-center gap-[16px] ">
           
            <div className="w-[212px] h-[24px] flex justify-center itmes-center font font-medium text-[20px] leading-[100%] tracking-[0%] text-center text-[#F0F0F0]">Upload</div>

            <div className="w-[218px] h-[40px] flex items-center justify-center font-normal text-[16px] leading-[100%] tracking-[0%] text-center text-[#F0F0F0]">Upload your email lists in <br/>.csv format</div>
            
          </div>
        </div>
        

        {/* ✅ New Inner Div inside Sibling Div */}
        <div className="w-[218px] h-[216px] flex flex-col items-center gap-[36px] ">
          <img src={icon2} alt="Image 1" className="w-[100px] h-[100px]" />

          <div className="w-[218px] h-[80px] flex   flex-col justify-center gap-[16px] ">
           
            <div className="w-[212px] h-[24px] flex justify-center itmes-center font font-medium text-[20px] leading-[100%] tracking-[0%] text-center text-[#F0F0F0]">Verify</div>

            <div className="w-[218px] h-[40px] flex items-center justify-center font-normal text-[16px] leading-[100%] tracking-[0%] text-center text-[#F0F0F0]">Let Verifier perform,<br/> ensuring email validity</div>
            
          </div>
        </div>
        

        {/* ✅ New Inner Div inside Sibling Div */}
        <div className="w-[218px] h-[216px] flex flex-col items-center gap-[36px] ">
          <img src={icon3} alt="Image 1" className="w-[100px] h-[100px]" />

          <div className="w-[218px] h-[80px] flex   flex-col justify-center gap-[16px] ">
           
            <div className="w-[212px] h-[24px] flex justify-center itmes-center font font-medium text-[20px] leading-[100%] tracking-[0%] text-center text-[#F0F0F0]">Download</div>

            <div className="w-[218px] h-[40px] flex items-center  font-normal text-[16px] leading-[100%] tracking-[0%] text-center justify-center text-[#F0F0F0]">Download your clean and<br/> verified email list</div>
            
          </div>
        </div>

      </div>

    </div>
  );
}
