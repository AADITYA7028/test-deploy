





import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center py-20">
      
      <div className="">
        
        <div className="w-[1140px] h-[256px]  flex flex-col items-center gap-[8px]">
          
          <div className="w-[1140px] h-[168px]  p-[10px] flex justify-center items-center">
            <div className={`w-[682px] h-[148px] text-center ${styles.font} text-[72px] leading-[74px] tracking-[0%] font-semibold ${styles.gradient}`}>
              <p className="font-semibold">Email Checker</p>  
              <p className="font-normal mt-2">
                <span className="font-normal">and </span>  
                <span className="font-semibold">Verifier</span>
              </p>
            </div>
          </div>

          <div className="w-[1140px] h-[80px] p-[10px] flex justify-center items-center ">
            <p className={`w-[544px] h-[60px] ${styles.font} font-normal text-[18px] leading-[30px] text-center ${styles.textColor}`}>
              Reduce bounce rate and improve your email marketing performance with our verifier.
            </p>
          </div>
         
          <div
  className="w-[602px] bg-transparent backdrop-blur-[8px] flex"
>
  <input
    type="text"
    placeholder="Enter an email to verify"
    className={`relative w-2/3 h-[64px] ${styles.placeholderBg} placeholder:text-[#F0F0F0] rounded-l-[18px] placeholder:text-[18px] placeholder:font-[500] placeholder:leading-[100%] placeholder:tracking-wide placeholder:w-[220px] placeholder:h-[22px] placeholder:${styles.font} pl-[28px] pr-[140px] outline-none shadow-lg`}
  />
  <div className="h-[64px] w-1/3 flex items-center justify-end backdrop-blur-[8px] bg-[#272a49cc] rounded-r-[18px] pr-2">
    <button
    className={`${styles.buttonBg} ${styles.buttonBoder} text-[#F0F0F0] transform h-[52px] w-[124px] rounded-[12px] px-[30px] py-[14px] font-[500] text-[20px] leading-[100%] tracking-[0%] ${styles.font} flex items-center justify-center`}
  >
    Verify
  </button>
  </div>
</div>

        </div>
        
      </div>
      
    </div>
  );
}


