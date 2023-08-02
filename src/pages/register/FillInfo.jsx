import { useRef, useState } from "react"
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import thaiflag from '../../img/thai-flag.svg'
import germanflag from '../../img/german-flag.svg'
import { ArrowLeft, MarkerPin01 } from '@untitled-ui/icons-react'

const FillInfo = () => {
  const [filledInfo, setFilledInfo] = useState(true)
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px]'>
        <button onClick={() => location.href = "/signup"}>
          <ArrowLeft />
        </button>
        สมัครสมาชิก
      </header>
      <main className='px-5 py-[46px]'>
        <h1 className='text-[22px] font-bold'>ข้อมูลส่วนตัว</h1>
        <p className='mt-4'>กรอกข้อมูลเพิ่มเติมโดยข้อมูลเหล่านี้<br/> จะแสดงอยู่ในหน้าบัญชีของคุณ</p>

        <form action="#" className="flex flex-col gap-y-5">
          <div className='flex flex-col'>
            <label htmlFor='name'>ชื่อ</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='name' name='name' type='text' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='surname'>นามสกุล</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='surname' name='surname' type='text'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='email'>อีเมลของคุณ</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='email' name='email' type='email'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='birthdate'>วันเกิดของคุณ</label>
            <input type="date" className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='birthdate' name='birthdate'/>
          </div>
        </form>
      </main>
      <footer className='flex px-5 gap-x-3'>
        <button onClick={() => location.href = '/success'} className={`w-full text-white rounded-[9px] p-3 text-center ${!filledInfo ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!filledInfo}>ดำเนินการต่อ</button>
      </footer>
    </>
  )
}

export default FillInfo