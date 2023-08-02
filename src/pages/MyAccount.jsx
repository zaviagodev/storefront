import { Link } from 'react-router-dom'
import avatarImg from '../img/avatar.svg'

const MyAccount = () => {
  return (
    <header className="absolute top-0 pt-20 pb-5 px-5 bg-[#BBE5BB] w-full">
      <div className='flex'>
        <img src={avatarImg} />
        <div className='ml-3'>
          <span>ศิริรัตณ์ เจริญศิริ</span>
          <Link>แก้ไขโปรไฟล์ของฉัน</Link>
        </div>
      </div>
    </header>
  )
}

export default MyAccount