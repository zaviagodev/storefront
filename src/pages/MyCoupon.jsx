import { ArrowLeft, MarkerPin01, AlertTriangle } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const MyCoupon = () => {
  const CouponSheet = ({proTitle, code, desc, date}) => {
    return (
      <>
      <div className='border border-[#D6D6D6] rounded-[8px] flex bg-[#FBFBFB] relative'>
        <div className='p-6 m-auto w-[30%]'>
          <h2 className='text-[23px] text-[#01A449] text-center font-bold'>{proTitle}</h2>
        </div>
        <div className='flex flex-col align-between my-6 px-6 border-l-[2px] border-l-[#6666633] border-l-dashed w-[70%]'>
          <div>
            <h2 className='text-md text-[#333333] font-bold'>โค้ด: {code}</h2>
            <p className='text-[#424242] text-xs font-medium'>{desc}</p>
          </div>
          <div>
            <p className='text-[#989898] text-xs mt-6'>ใช้ได้ถึง {date}</p>
          </div>
        </div>

        <div className='absolute w-[20px] h-[40px] border border-[#D6D6D6] bg-white rounded-r-[99px] left-[-1px] border-l-0 top-[37.5%]'></div>
        <div className='absolute w-[20px] h-[40px] border border-[#D6D6D6] bg-white rounded-l-[99px] right-[-1px] border-r-0 top-[37.5%]'></div>
      </div>

      </>
    )
  }
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold'>
        <Link to="/my-account">
          <ArrowLeft />
        </Link>
        คูปองของฉัน
      </header>
      <main className='p-5'>
        <div className='inline-block w-full'>
          <button className='p-4 my-2 w-1/2 border-r border-r-[#F2F2F2]'>QR Code</button>
          <button className='p-4 my-2 w-1/2'>Barcode</button>
        </div>

        <div className='flex flex-col gap-y-5'>
          <CouponSheet proTitle="ลด 2000" code="PAY25TH" desc="เมื่อช้อป ฿ 1,499.00 ลดถึง ฿ 950" date="14 July 2023"/>
          <CouponSheet proTitle="ลด 2000" code="PAY25TH" desc="เมื่อช้อป ฿ 1,499.00 ลดถึง ฿ 950" date="14 July 2023"/>
        </div>
      </main>
    </>
  )
}

export default MyCoupon