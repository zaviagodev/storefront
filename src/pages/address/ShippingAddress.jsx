import { ArrowLeft, MarkerPin01, AlertTriangle } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ShippingAddress = () => {
  const [open, setOpen] = useState(false)

  const AddressInfo = ({name, address}) => {
    return (
      <div className='bg-[#F4F4F4] p-5 rounded-[7px]'>
        <div className='flex justify-between'>
          {name}
          <div className='flex gap-x-4'>
            <Link to="/shipping-address/edit">แก้ไข</Link>
            <button onClick={() => setOpen(true)}>ลบ</button>
          </div>
        </div>
        <div className='text-[#8A8A8A] mt-[6px] text-[13px]'>{address}</div>
      </div>
    )
  }

  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold'>
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

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EC5454]">
                      <AlertTriangle color="white"/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-[#333333]">
                        คุณต้องการ 'ลบ'<br/>ที่อยู่การจัดส่ง ใช่หรือไม่
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-xs text-[#8A8A8A]">
                          หากคุณกดยืนยันในการลบ<br/>ข้อมูลที่อยู่ของคุณจะถูกลบออกไป
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className='w-full bg-white border border-[#111111] text-[#111111] rounded-[9px] p-3 text-center'
                      onClick={() => setOpen(false)}
                    >
                      ยกเลิกการลบ
                    </button>
                    <button
                      type="button"
                      className='w-full bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'
                      onClick={() => setOpen(false)}
                    >
                      ยืนยันการลบ
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ShippingAddress