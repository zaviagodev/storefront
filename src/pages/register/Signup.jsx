import { useRef, useState } from "react"
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import thaiflag from '../../img/thai-flag.svg'
import germanflag from '../../img/german-flag.svg'
import { ArrowLeft, MarkerPin01 } from '@untitled-ui/icons-react'

const Signup = () => {
  const [getOTP, setGetOTP] = useState(false);
  const [filledPhone, setFilledPhone] = useState(true);
  const [filledOTP, setFilledOTP] = useState(true);
  const [phoneError, setPhoneError] = useState(true);
  const [otperror, setOtperror] = useState(false)

  const goBack = () => {
    setGetOTP(false);
    setFilledPhone(false);
  }

  const goNext = () => {
    setGetOTP(true);
  }

  return (
    <>
      {!getOTP ? (
        <>
          <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px]'>
            <img src={logo} />
          </header>
          <main className='px-5 py-[46px]'>
            <h1 className='text-[22px] font-bold'>กรอกเบอร์มือถือของคุณ</h1>
            <p className='mt-4'>กรอกเบอร์มือถือของคุณและกดรับรหัสยืนยันทาง SMS (OTP) เพื่อยืนยันเบอร์มือถือของคุณ</p>

            <div className="flex gap-x-3">
              <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px]'>
                <option value="thailand">
                  +66
                </option>
                <option value="germany">
                  +49
                </option>
              </select>

              <input type="tel" id="phone" className={`border ${phoneError ? "border-[#EC5454]" : "border-[#E3E3E3]"} rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] w-full`} onInput={(e) => {
                if (e.target.value !== ""){
                  setFilledPhone(true)
                } else {
                  setFilledPhone(false)
                }
              }}/>
            </div>

            {!phoneError ? "" : (<p className="text-[#EC5454] inter mt-2">This phone number is invalid</p>)}

            <button onClick={goNext} className={`mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!filledPhone ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!filledPhone}>รับรหัสยืนยัน SMS (OTP)</button>

            <p className="text-[#9E9E9E] mt-[14px] text-[13px]">หน้าเพจนี้อันรวมไปถึงเอกสารหรือข้อความต่างๆที่มีความเกี่ยวข้องกับหน้าเพจนี้ถูกเขียนขึ้นมาเพื่อแจ้งท่านให้ทราบถึง ข้อกำหนด</p>
          </main>
        </>
      ) : (
        <>
          <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px]'>
            <button onClick={goBack}>
              <ArrowLeft />
            </button>
            ยืนยันรหัส
          </header>
          <main className='px-5 py-[46px]'>
            <h1 className='text-[22px] font-bold'>ยืนยันรหัส OTP</h1>
            <p className='mt-4'>เราได้ส่ง SMS (OTP) ไปที่เบอร์<br/>090-1234-567</p>

            <div className="flex gap-x-[9px] mt-9">
              <input type="text" maxLength="1" id="num1" className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off"/>
              <input type="text" maxLength="1" id="num2" className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" />
              <input type="text" maxLength="1" id="num3" className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" />
              <input type="text" maxLength="1" id="num4" className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" />
              <input type="text" maxLength="1" id="num5" className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" />
              <input type="text" maxLength="1" id="num6" className={`border ${otperror ? "border-[#EC5454]" : "border-[#D8DADC]"} w-[16.67%] p-3 text-center text-2xl rounded-[15px]`} autoComplete="off" />
            </div>

            {!otperror ? (<p className="text-center mt-[43px]">I didn't receive a code <strong>Resend</strong></p>) : (<p className="text-center text-[#EC5454] inter mt-[43px]">Wrong code, please try again <strong>Resend</strong></p>)}

            <Link to="/fill-info" className={`block mt-10 w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!filledOTP ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!filledOTP}>ยืนยันรหัส OTP</Link>
          </main>
        </>
      )}
    </>
  )
}

export default Signup