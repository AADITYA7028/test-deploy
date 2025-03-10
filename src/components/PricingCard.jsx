import React from 'react'

export default function PricingCard() {
  return (
  <div className="w-full min-h-screen  flex justify-center pt-20  pb-35">

    <div className="w-[1020px] flex flex-col gap-[80px] items-center ">
  
 <div className="w-[858px]   flex flex-col gap-[24px] items-center">
 
 <p className="w-[858px]  font font-medium text-[58px] text-[#F0F0F0]">Choose the right plan for you</p>

 <p className="w-[320px]  font font-normal text-[17px] text-[#E0E0E0]">With great power comes great plans</p>

 </div>

 <div className="w-[1020px] h-[570px] flex justify-center items-center  ">

    <div className="w-[600px] h-[570px] [background:linear-gradient(112.96deg,_rgba(69,81,116,0.64)_0%,_rgba(33,50,98,0.24)_100%)]     rounded-[16px] flex flex-col gap-[55px] items-center justify-center">

        <div className="w-[384px]  flex gap-[20px]  ">

            <p className="w-[103px] h-[29px] font font-semibold text-[24px] text-[#5FAEF8] ">Monthly</p>


            <label class="relative inline-flex items-center cursor-pointer">
            {/* <!-- Toggle Background --> */}
            <input type="checkbox" class="sr-only peer" />
            <div class="w-[66px] h-[36px] border border-gray-300 rounded-[32px] bg-gradient-to-r from-[rgba(130,155,231,0.8)] to-[rgba(104,122,208,0.24)] peer-checked:from-[rgba(104,122,208,0.24)] peer-checked:to-[rgba(130,155,231,0.8)] transition-all duration-300"></div>

            {/* <!-- Inner Circle --> */}
            <div class="absolute left-1 top-1 w-[28px] h-[28px] bg-[#DAE9FF] rounded-full transition-all duration-300 peer-checked:translate-x-[30px]"></div>
            </label>

            <p className="w-[175px] h-[29px] font font-medium text-[24px] text-[#A4A4A6] ">Pay-as-you-go</p>


        </div>

        <p className="w-[321px] h-[24px] font font-medium text-[20px] text-[#F0F0F0] ">How many emails do you have?</p>

        <p className="w-[300px] h-[48px] rounded-[10px] flex justify-center items-center gap-[12px] bg-[#FFFFFF]">
            <p className="w-[59px] h-[24px] text-[20px] text-[#201D3D]">2,000</p>
        </p>

        <div class="relative w-[484px] h-[16px] bg-white border-[0.75px]  border-transparent rounded-[30px] ">
        {/* <!-- Filled Progress --> */}
        <div class="h-full bg-gradient-to-r from-[#2095F2] to-[#07CAEB] rounded-[30px] w-[50%]"></div>

        {/* <!-- Progress Button (Overflowing) --> */}
        <div class="absolute -top-[13px] left-[50%] -translate-x-1/2 w-[42px] h-[42px] bg-[#3E97EA] rounded-full shadow-md  cursor-pointer"></div>
        </div>

        <div className="w-[291px] h-[63px] flex items-center gap-[4px]">
            <p className="w-[220px] h-[63px] font font-bold text-[52px] text-[#F0F0F0]">$18 USD</p>
            <p className="w-[67px] h-[13px] font font-normal text-[18px] text-[#F0F0F0]">/month</p>

            
        </div>
         
        <button className="w-[193px] h-[52px]  rounded-[12px]  flex items-center justify-center gap-[8px] bg-gradient-to-r from-[#531FAD] via-[#3A78D0] to-[#1683DC] border border-gray-500">
              <div className="w-[133pxpx] h-[24px] font text-medium text-[20px] text-[#FFFFFF]">
                Dive in!
              </div>
            </button>


    </div>
    
    <div className="w-[420px] h-[532px] flex flex-col justify-center bg-[radial-gradient(191.31%_100%_at_50%_0%,_#281E38_0%,_rgba(11,8,28,0.6)_100%)] rounded-tr-[16px] rounded-br-[16px] p-[35PX] gap-[16px]">

        <p className="w-[142px] h-[24px] font font-semibold text-[20px] text-[#F0F0F0] ">Monthly rates</p>
        
        <div className="w-[340px] h-[406px] flex flex-col gap-[8px] ">

            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between bg-[#596793] text-[17px]">
                <p className="w-[136px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">2,000/mo</span>
                </p>

                <p className="w-[96px] h-[22px] font font-medium  text-[#DDDDE1]">0.009 USD</p>
            </p>


            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[136px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">5,000/mo</span>
                </p>

                <p className="w-[96px] h-[22px] font font-medium  text-[#DDDDE1]">0.008 USD</p>
            </p>

            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[144px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">10,000/mo</span>
                </p>

                <p className="w-[106px] h-[22px] font font-medium  text-[#DDDDE1]">0.0075 USD</p>
            </p>

            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[147px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">25,000/mo</span>
                </p>

                <p className="w-[96px] h-[22px] font font-medium  text-[#DDDDE1]">0.007 USD</p>
            </p>

            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[148px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">50,000/mo</span>
                </p>

                <p className="w-[96px] h-[22px] font font-medium  text-[#DDDDE1]">0.007 USD</p>
            </p>
            
            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[156px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">100,000/mo</span>
                </p>

                <p className="w-[107px] h-[22px] font font-medium  text-[#DDDDE1]">0.0039 USD</p>
            </p>

            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[158px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">250,000/mo</span>
                </p>

                <p className="w-[106px] h-[22px] font font-medium  text-[#DDDDE1]">0.0035 USD</p>
            </p>

            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[160px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">500,000/mo</span>
                </p>

                <p className="w-[95px] h-[22px] font font-medium  text-[#DDDDE1]">0.003 USD</p>
            </p>

            <p className="w-[340px] h-[38px] flex rounded-[8px] p-[8px] justify-between  text-[17px]">
                <p className="w-[173px] h-[22px] font   text-[#F0F0F0]">
                    <span className="font-medium">from </span>
                    <span className="font-semibold">1,000,000/mo</span>
                </p>

                <p className="w-[116px] h-[22px] font font-medium  text-[#DDDDE1]">0.00225 USD</p>
            </p>

        </div>

    </div>
 </div>

    </div>
  </div>
  )
}
