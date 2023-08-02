import { Link } from 'react-router-dom'
import avatarImg from '../img/avatar.svg'
import silverCard from '../img/silvercard.svg'
import qrcode from '../img/qrcode.svg'
import recentViews from '../img/clock-rewind.svg'
import { useState } from 'react'
import { Heart, File06, ClockRewind, MarkerPin01, ChevronRight, CreditCard02 } from '@untitled-ui/icons-react'

const MyAccount = () => {
  const [bronzeLevel, setBronzeLevel] = useState(false);
  const [silverLevel, setSilverLevel] = useState(true);

  const AccountMenu = ({icon, title, link}) => {
    return (
      <Link to={link} className='flex justify-between items-center px-5 py-[17px] w-full'>
        <div className='flex gap-x-[10px]'>
          {icon}
          {title}
        </div>
        <div>
          <ChevronRight />
        </div>
      </Link>
    )
  }

  const settingsMenu = [
    {
      icon: <MarkerPin01 />,
      title: 'ที่อยู่ในการจัดส่ง',
      link: '#'
    },
    {
      icon: <CreditCard02 />,
      title: 'การชำระเงิน',
      link: '#'
    }
  ]
  return (
    <div className='bg-[#F4F4F4]'>
      <header className="absolute top-0 pt-20 pb-[60px] px-5 bg-[#BBE5BB] w-full">
        <div className='flex items-center'>
          <img src={avatarImg} />
          <div className='ml-3 flex flex-col'>
            <span className='font-bold'>ศิริรัตณ์ เจริญศิริ</span>
            <Link className='flex items-center gap-x-1'>
              แก้ไขโปรไฟล์ของฉัน
              <ChevronRight />
            </Link>
          </div>
        </div>
      </header>
      <main className='px-5 relative top-[80px]'>
        <div className='bg-white rounded-[6px] items-center' style={{filter:"drop-shadow(0 4px 20px #6363630D"}}>
          <div className='flex justify-between p-5'>
            <div className='flex items-center gap-x-[14px]'>
              <img src={silverLevel ? silverCard : ""} />
              <div className='text-[#333333] font-bold'>ระดับ : {silverLevel ? "Silver" : ""}</div>
            </div>
            <div>
              <button className='bg-[#00B14F] flex gap-x-2 text-white items-center text-sm p-1 rounded-[4px]'>
                <img src={qrcode} />
                ID ของฉัน
              </button>
            </div>
          </div>

          <div className='p-5'>
            <div className='flex'>
              <div className='basis-1/3 flex gap-x-1 text-[13px] justify-center'>
                Wallet
              </div>
              <div className='basis-1/3 flex gap-x-1 text-[13px] justify-center'>
                Coins
              </div>
              <div className='basis-1/3 flex gap-x-1 text-[13px] justify-center'>
                Coupon
              </div>
            </div>

            <div className='flex'>
              <div className='basis-1/3 flex gap-x-1 text-[13px] justify-center'>
                <span className='text-[#1BB040]'>฿ </span>850
              </div>
              <div className='basis-1/3 flex gap-x-1 text-[13px] justify-center'>
                230 <span className='text-[#FFA800]'>coins</span>
              </div>
              <div className='basis-1/3 flex gap-x-1 text-[13px] justify-center'>
                8 <span className='text-[#BC0000]'>โค๊ด</span>
              </div>
            </div>
          </div>

          <hr />

          <div className='p-5 w-full flex'>
            <Link to="#" className='text-sm flex flex-col items-center text-center'>
              <Heart color='#333333'/>
              รายการสินค้า<br/>ที่ถูกใจ
            </Link>
            <Link to="#" className='text-sm flex flex-col items-center text-center'>
              <File06 color='#333333'/>
              คำสั่งซื้อ<br/>ของฉัน
            </Link>
            <Link to="#" className='text-sm flex flex-col items-center text-center'>
              <ClockRewind color='#333333'/>
              สินค้าที่<br/>ดูล่าสุด
            </Link>
          </div>

          <hr />

          <div className='flex justify-center'>
            <button className='p-5'>การใช้งานคะแนน</button>
            <button className='p-5'>ระดับคะแนน</button>
          </div>
        </div>

        <h2 className='mt-[30px]'>การตั้งค่า</h2>
        <div className='flex flex-col bg-white rounded-[6px] items-center gap-y-[10px]' style={{filter:"drop-shadow(0 4px 20px #6363630D"}}>
          {settingsMenu.map((menu) => 
            <AccountMenu icon={menu.icon} title={menu.title} link={menu.link} />
          )}
        </div>
      </main>
    </div>
  )
}

export default MyAccount