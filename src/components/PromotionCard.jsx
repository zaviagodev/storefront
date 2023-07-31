import { Link } from "react-router-dom";
import { SfIconSearch, SfIconArrowForward, SfIconCalendarToday } from '@storefront-ui/react'

const PromotionCard = ({title, image, date, link}) => {
  return (
    <Link to={link} className="min-w-[300px]">
      <h2 className='mb-[5px]'>
        เข้าร่วมเลย
        <SfIconArrowForward className="w-[16px]"/>
      </h2>
      <img src={image} />
      <h2 className='mt-4'>{title}</h2>

      <p className='text-[#2E3A59] mt-[10px]'>
        <SfIconCalendarToday />
        {date}
      </p>
    </Link>
  )
}

  export default PromotionCard