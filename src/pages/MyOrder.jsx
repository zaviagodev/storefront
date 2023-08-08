import React, { useState, useRef } from "react"
import { ArrowLeft } from "@untitled-ui/icons-react"

const MyOrder = () => {
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
        <button onClick={() => location.href = "/"} type="button">
          <span className="sr-only">Close panel</span>
          <ArrowLeft />
        </button>
        คำสั่งซื้อของฉัน
      </header>
    </>
  )
}

export default MyOrder