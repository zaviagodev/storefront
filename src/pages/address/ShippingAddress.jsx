import { ArrowLeft, MarkerPin01 } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'

const ShippingAddress = () => {
  const AddressInfo = ({name, address}) => {
    return (
      <div className='bg-[#F4F4F4] p-5 rounded-[7px]'>
        <div className='flex justify-between'>
          {name}
          <div className='flex gap-x-4'>
            <button>แก้ไข</button>
            <button>ลบ</button>
          </div>
        </div>
        <div className='text-[#8A8A8A] mt-[6px] text-[13px]'>{address}</div>
      </div>
    )
  }
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px]'>
        <Link to="/my-account">
          <ArrowLeft />
        </Link>
        ที่อยู่ของคุณ
      </header>

      <main className='p-5 flex flex-col gap-y-[12px]'>
        <AddressInfo name="John Persson" address="999/99 อาคาร แบงเทรดดิ้ง ชั้นสอง บริษัท ซาเวียโก จำกัด เขตสวนหลวง..."/>
        <AddressInfo name="John Persson" address="999/99 อาคาร แบงเทรดดิ้ง ชั้นสอง บริษัท ซาเวียโก จำกัด เขตสวนหลวง..."/>
        <Link to="/shipping-address/add" className='bg-[#F4F4F4] p-6 rounded-[7px]'>
          <div className='flex gap-x-[7px] justify-center'>
            <MarkerPin01 />
            เพิ่มที่อยู่ใหม่
          </div>
        </Link>
      </main>
    </>
  )
}

export default ShippingAddress