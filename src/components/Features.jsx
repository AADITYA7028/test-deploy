import React from "react";
import icon4 from "../assets/icon4.svg";
import icon6 from "../assets/icon6.svg";
import check from "../assets/check.png";
import Vector from "../assets/Vector.svg";
import circle from "../assets/circle.svg";
import maria from "../assets/maria.svg";
import tick from "../assets/tick.svg";
import britney from "../assets/britney.svg";
import martin from "../assets/martin.svg";
import cross from "../assets/cross.svg";
import pic1 from "../assets/pic1.svg";
import pic2 from "../assets/pic2.svg";
import pic3 from "../assets/pic3.svg";
import pic4 from "../assets/pic4.svg";
import pic5 from "../assets/pic5.svg";
import lang from "../assets/lang.png";




export default function Features() {
  return (
    <div className="w-full flex flex-col items-center gap-[76px] bg-transparent">
      <div className="h-[176px] mt-80 flex flex-col items-center gap-[24px] bg-transparent">
        <div className="h-[130px] flex items-center justify-center text-center bg-transparent">
          <p className="font font-medium text-[58px] leading-[112%] tracking-[0%] text-center text-[#F0F0F0]">
            World’s most accurate email <br />verifier and validator online
          </p>
        </div>

        <div className="h-[22px] flex items-center justify-center text-center mx-auto font font-normal text-[18px] leading-[100%] tracking-[0%] text-[#E0E0E0]">
          Clean and validate your email addresses in just one click
        </div>
      </div>
      <div className="h-[1011px] w-[1094px] flex flex-col gap-[120px] items-center">

        <div className="w-[989px] h-[445px] gap-[68px]  flex">

            <div className="w-[500px] h-[284px] flex flex-col gap-[20px] ">
                <div className="w-[267px] h-[30px] flex gap-[20px] ">
                  <img src={icon4} alt="Icon" className="w-[30px] h-[30px]" />
                  <div className="w-[217px] h-[30px] flex items-center text-[#C2C2C2] font font-normal text-[24px] leading-[125%]">Bulk email verifier
                  </div>
                </div>



              <div className="w-[500px] h-[234px] flex flex-col gap-[32px] ">
                <div className="w-[407px] h-[30px] font font-semibold text-[24px] leading-[125%] text-[#E0E0E0]">
                  Verify your email lists effortlessly
                </div>
                <div className="w-[500px] h-[40px] font font-normal text-[16px] leading-[100%] text-[#E0E0E0] ">
                  Use the bulk email verifier to improve email deliverability and sender reputation.
                </div>

                {/* ✅ Features List */}
                <div className="w-[215px] h-[100px] flex flex-col gap-[20px] ">

                  {/* ✅ Feature Item 1 */}
                  <div className="w-[215px] h-[20px] flex items-center ">
                    <img src={check} alt="Check" className="w-[18px] h-[18px] mr-2" />
                    <div className="w-[179px] h-[20px] text-[#E0E0E0] text-[16px] font-normal ">
                      Remove wrong emails
                    </div>
                  </div>

                  {/* ✅ Feature Item 2 */}
                  <div className="w-[175px] h-[20px] flex items-center ">
                    <img src={check} alt="Check" className="w-[18px] h-[18px] mr-2" />
                    <div className="w-[139px] h-[20px] text-[#E0E0E0] text-[16px] font-normal ">
                      Avoid spam traps
                    </div>
                  </div>

                  {/* ✅ Feature Item 3 */}
                  <div className="w-[171px] h-[20px] flex items-center ">
                    <img src={check} alt="Check" className="w-[18px] h-[18px] mr-2" />
                    <div className="w-[135px] h-[20px] text-[#E0E0E0] text-[16px] font-normal ">
                      Reduce bounces
                    </div>
                  </div>

                </div>



              </div>
              <button className="w-[140px] h-[52px] rounded-[12px] px-[32px] py-[14px] flex items-center justify-center gap-[8px] bg-gradient-to-r from-[#531FAD] via-[#3A78D0] to-[#1683DC] border border-gray-500">
              <div className="w-[76px] h-[24px] font text-medium text-[20px] text-[#FFFFFF]">
                Dive in!
              </div>
            </button>
            </div>


          <div className="w-[421px] h-[445px] flex flex-col rounded-[20px] border-[1.5px] border-transparent bg-gradient-to-br from-[#40538b]/60 to-[#213262]/25 p-4 text-white">

            <div className="w-[373.07px] h-[149.39px] mx-auto my-6  flex  items-center">

              <div className="w-[108.06px] h-[97.1px] ml-2   flex flex-col">
                <p className="w-full h-[25px] font  text-[#DFD7F2] font-bold text-[17.77px] leading-[100%] tracking-[2%] text-center overflow-hidden whitespace-nowrap text-ellipsis">Total Leads</p>

                <p className="w-[88px] h-[39px] text-[#DFD7F2] font font-semibold mt-2">5,689</p>

                <p className="w-[108px] flex items-center space-x-1 text-[#5DDE94]">
                <img src={Vector} alt="Img" className="w-[12px] h-[7px]" />
              <span className="font-bold text-[11px] leading-[14px] tracking-normal">
                    100% Open Rates
                            </span>
                           </p>

              </div>
              
              
                <img src={circle} alt="img" className="w-[111.84px] h-[111-84px] ml-[100px]" />
              


            </div>
            
           


<div className="w-[373.07px] h-[47.93px] rounded-[12px] border border-[1px] border-transparent bg-gradient-to-br from-[#303F6C]/60 to-[#6AB2DE]/0 p-4 text-white flex items-center justify-between mb-4">
  
  {/* <!-- Profile Image --> */}
  <img src={maria} alt="img" className="w-[30px] h-[30px] rounded-full" />
  
  {/* <!-- Name --> */}
  <span className="flex-1 ml-2 font-normal text-[11.18px] text-[#DFD7F2] leading-[100%] tracking-normal">
    Maria Hill
  </span>

  {/* <!-- Valid Status --> */}
  <span className="flex items-center justify-center gap-1 flex-1">
    <img src={tick} alt="img" className="w-[15.18px] h-[19.17px]" />
    <p className="font-semibold text-[#3ED299]">Valid</p>
  </span>

  {/* <!-- Deliverable Status --> */}
  <span className="flex-1 text-right font-semibold text-[#CBE7FF] text-[11.18px]">
    Deliverable
  </span>

</div>



<div className="w-[373.07px] h-[47.93px] rounded-[12px] border border-[1px] border-transparent bg-gradient-to-br from-[#303F6C]/60 to-[#6AB2DE]/0 p-4 text-white flex items-center justify-between mb-4">
  
  {/* <!-- Profile Image --> */}
  <img src={britney} alt="img" className="w-[30px] h-[30px] rounded-full" />
  
  {/* <!-- Name --> */}
  <span className="flex-1 ml-2 font-normal text-[11.18px] text-[#DFD7F2] leading-[100%] tracking-normal">
  Britney Stey
  </span>

  {/* <!-- Valid Status --> */}
  <span className="flex items-center justify-center gap-1 flex-1">
    <img src={tick} alt="img" className="w-[15.18px] h-[19.17px]" />
    <p className="font-semibold text-[#3ED299]">Valid</p>
  </span>

  {/* <!-- Deliverable Status --> */}
  <span className="flex-1 text-right font-semibold text-[#CBE7FF] text-[11.18px]">
    Deliverable
  </span>

</div>


<div className="w-[373.07px] h-[47.93px] rounded-[12px] border border-[1px] border-transparent bg-gradient-to-br from-[#303F6C]/60 to-[#6AB2DE]/0 p-4 text-white flex items-center justify-between mb-4">
  
  {/* <!-- Profile Image --> */}
  <img src={martin} alt="img" className="w-[30px] h-[30px] rounded-full" />
  
  {/* <!-- Name --> */}
  <span className="flex-1 ml-2 font-normal text-[11.18px] text-[#DFD7F2] leading-[100%] tracking-normal">
  Martin Robert
  </span>

  {/* <!-- Valid Status --> */}
  <span className="flex items-center justify-center gap-1 flex-1">
    <img src={cross} alt="img" className="w-[15.18px] h-[19.17px]" />
    <p className="font-semibold text-[#FF5373]">Invalid</p>
  </span>

  {/* <!-- Deliverable Status --> */}
  <span className="flex-1 text-right font-semibold text-[#CBE7FF] text-[11.18px]">
  Not Deliverable
  </span>

</div>

 <div className="flex w-[146px] h-[24px] gap-0.5">
   
   <img src={pic1} alt="img1" className="w-[24px] h-[24px] rounded-[12px]" />
   <img src={pic2} alt="img2" className="w-[24px] h-[24px] rounded-[12px]" />
   <img src={pic3} alt="img3" className="w-[24px] h-[24px] rounded-[12px]" />
   <img src={pic4} alt="img4" className="w-[24px] h-[24px] rounded-[12px]" />
   <img src={pic5} alt="img5" className="w-[24px] h-[24px] rounded-[12px]" />

 </div>



          </div>



        </div>

        <div className="w-[1094px] h-[446px] flex gap-[83px]">
          
          <div className="w-[511px] h-[379.55px] border-[1.5px] border-transparent ">
            <img src={lang} alt="img" className="w-[511px] h-[379.55px]" />
          </div>

             
          <div className="w-[500px]  flex flex-col gap-[20px] ">
                <div className="w-[309px] h-[30px] flex gap-[20px] ">
                  <img src={icon6} alt="Icon" className="w-[30px] h-[30px]" />
                  <div className="w-[259px] h-[30px] flex items-center text-[#C2C2C2] font font-normal text-[24px] leading-[125%]">Email Verification API
                  </div>
                </div>



              <div className="w-[500px] h-[304px] flex flex-col gap-[32px] ">
                <div className="w-[500px] h-[60px] font font-semibold text-[24px] leading-[125%] text-[#E0E0E0]">
                Prevent inaccurate data with real-time email validation
                </div>
                <div className="w-[500px] h-[40px] font font-normal text-[16px] leading-[100%] text-[#E0E0E0] ">
                  Use the bulk email verifier to improve email deliverability and sender reputation.
                </div>

                {/* ✅ Features List */}
                <div className="w-[215px] h-[100px] flex flex-col gap-[20px] ">

                  {/* ✅ Feature Item 1 */}
                  <div className="w-[500px] h-[140px] flex items-center ">
                    <img src={check} alt="Check" className="w-[18px] h-[18px] mr-2" />
                    <div className="w-[464px] h-[40px] text-[#E0E0E0] text-[16px] font-normal ">
                    Elegant and secure HTTPS-based RESTful API, with JSON as its core data format
                    </div>
                  </div>

                  {/* ✅ Feature Item 2 */}
                  <div className="w-[500px] h-[20px] flex items-center ">
                    <img src={check} alt="Check" className="w-[18px] h-[18px] mr-2" />
                    <div className="w-[464px] h-[20px] text-[#E0E0E0] text-[16px] font-normal ">
                    Validate emails before they enter your database
                    </div>
                  </div>

                  {/* ✅ Feature Item 3 */}
                  <div className="w-[500px] h-[40px] flex items-center ">
                    <img src={check} alt="Check" className="w-[18px] h-[18px] mr-2" />
                    <div className="w-[464px] h-[40px] text-[#E0E0E0] text-[16px] font-normal ">
                    Integrate the Verifier's real-time API into your website's registration process.
                    </div>
                  </div>

                </div>



              </div>
              <button className="w-[140px] h-[52px] rounded-[12px] px-[32px] py-[14px] flex items-center justify-center gap-[8px] bg-gradient-to-r from-[#531FAD] via-[#3A78D0] to-[#1683DC] border border-gray-500">
              <div className="w-[76px] h-[24px] font text-medium text-[20px] text-[#FFFFFF]">
                Dive in!
              </div>
            </button>
            </div>
          



        </div>

      </div>
    </div>
  );
}

