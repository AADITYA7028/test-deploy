import React from 'react'
import Card from './Card.component'
import Card1 from '../assets/card1.svg'
import Card2 from '../assets/card2.svg'
import Card3 from '../assets/card3.svg'
import Card4 from '../assets/card4.svg'
import Card5 from '../assets/card5.svg'
import Card6 from '../assets/card6.svg'
import Card7 from '../assets/card7.svg'
import Card8 from '../assets/card8.svg'
import Card9 from '../assets/card9.svg'
import Card10 from '../assets/card10.svg'
import Card11 from '../assets/card11.svg'
import Card12 from '../assets/card12.svg'

let cardObject = [
    {
        image: Card1,
        header: "Disposable email detection",
        info: "Verifier detects & removes temp emails for a clean, reliable list."
    },

    {
      image: Card2,
      header: "Hard bounce prevention",
      info: "Efficiently eliminate undeliverable emails due to non-existent addresses."
  },

  {
    image: Card3,
    header: "Soft bounce prevention",
    info: "Verifier spots soft bounce issues for successful email delivery."
},

{
  image: Card4,
  header: "Email verification API",
  info: "Integrate our email verification software to remove inaccurate data."
},

{
  image: Card5,
  header: "Catch-All email detection",
  info: "Detect and remove catch-all domains to assess your email risk."
},

{
  image: Card6,
  header: "MX record validation",
  info: "Validate email authenticity with advanced MX record checks."
},

{
  image: Card7,
  header: "SMTP provider identification",
  info: "Automatically identify email providers to enhance targeting."
},

{
  image: Card8,
  header: "Email syntax validation",
  info: "Syntax check ensures only RFC-compliant emails remain."
},

{
  image: Card9,
  header: "Email domain validation",
  info: "Confirm domain functionality with our verification process."
},

{
  image: Card10,
  header: "SMTP verification",
  info: "Evaluate and analyse email deliverability for valuable insights."
},

{
  image: Card11,
  header: "Anti-greylisting technology",
  info: "Trust Verifier for accurate email verification with anti-greylisting tech."
},

{
  image: Card12,
  header: "Real-time results",
  info: "Track the real-time results of your email verification as we process the list."
}

]


export default function Services() {

  return (
  

    <div className='min-h-screen w-full flex justify-center p-30'>
      <div className="w-1/3 flex flex-col gap-5">
        <h2 className='w-[318px] font font-medium text-[52px] text-[#F0F0F0] '>Rock solid email verification</h2>
        <p className="w-[267px] font font-normal text-[18px] text-[#E0E0E0]">Clean, optimize, and supercharge your email lists.</p>
        <button className="w-[140px] h-[52px]  rounded-[12px] px-[32px] py-[14px] flex items-center justify-center gap-[8px] bg-gradient-to-r from-[#531FAD] via-[#3A78D0] to-[#1683DC] border border-gray-500">
              <div className="w-[76px] h-[24px] font text-medium text-[20px] text-[#FFFFFF]">
                Dive in!
              </div>
            </button>
      </div>
      <div className="w-2/3 flex gap-[20px] flex-wrap justify-center items-end">
      
      {cardObject.map((element, i)=>
        <Card image={element.image} header={element.header} info={element.info} key={i}/>
      )}
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      </div>
    </div>
  )
}
