
import { ArrowLeft, MarkerPin01 } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const AddShippingAddress = () => {
  const [province, setProvince] = useState([]);
  const [modified, setModified] = useState(true);
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold'>
        <Link to="/shipping-address">
          <ArrowLeft />
        </Link>
        ใส่ที่อยู่การจัดส่ง
      </header>
      <main className='p-5 pb-[100px]'>
        <form action="#" className='flex flex-col gap-y-5'>
          <div className='flex flex-col'>
            <label htmlFor='receiver-name'>ชื่อผู้รับ</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='receiver-name' name='receiver-name' type='text' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='surname'>นามสกุล</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='surname' name='surname' type='text'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='address'>ที่อยู่ (ห้องเลขที่, ตึก, ถนน)</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='address' name='address' type='text'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='province'>จังหวัด</label>
            <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px]' id='province' name='province'>
              <option value='กรุงเทพมหานคร'>กรุงเทพมหานคร</option>
              <option value='สมุทรปราการ'>สมุทรปราการ</option>
              <option value='สมุทรสาคร'>สมุทรสาคร</option>
              <option value='ปทุมธานี'>ปทุมธานี</option>
            </select>
          </div>
          
          <div className='flex flex-col'>
            <label htmlFor='district'>เมือง / เขต</label>
            <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px]' id='district' name='district'>
              <option value='สวนหลวง'>สวนหลวง</option>
              <option value='บางกะปิ'>บางกะปิ</option>
              <option value='บางนา'>บางนา</option>
              <option value='ห้วยขวาง'>ห้วยขวาง</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='postal-code'>รหัสไปรษณีย์</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='postal-code' name='postal-code' type='text'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='phone'>เบอร์โทรศัพท์</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='phone' name='phone' type='tel'/>
            <p className="text-xs text-[#474747] mt-[11px]">ที่ให้ต้องการให้ค้นส่งติดต่อแจ้งเมื่อมีการจัดส่ง</p>
          </div>
        </form>
      </main>
      <footer className="p-5 fixed bottom-0 w-full">
        <Link to="/shipping-address" className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!modified ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!modified}>บันทึกที่อยู่</Link>
      </footer>
    </>
  )
}

export default AddShippingAddress