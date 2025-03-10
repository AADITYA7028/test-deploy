import React from 'react'

export default function Card({image,header,info}) {
    
  return (
    <div className=' p-4 w-[254px] h-[292px] rounded-2xl flex flex-col border-[1px] border-transparent gap-[28px] [background:radial-gradient(191.31%_100%_at_50%_0%,_#281E38_0%,_rgba(11,8,28,0.6)_100%)]'>

      <img src={image} alt="" className='w-[50px] h-[50px] mt-6' />

      <h3 className='w-[218px] h-[48px] font font-medium text-[20px] text-[#F0F0F0]'>{header}</h3>

      <p className='w-[218px] h-[54px] font font-normal text-[15px] text-[#E0E0E0]'>{info}</p>
    </div>
    
  )
}
