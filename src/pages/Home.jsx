import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import PromotionCard from '../components/PromotionCard';
import { useProducts } from '../hooks/useProducts'
import { useFrappeAuth } from 'frappe-react-sdk';
import banner from '../img/banner.png'
import coin from '../img/coin.svg'
import coupon from '../img/coupon.svg'
import { SfIconSearch, SfIconArrowForward, SfIconCalendarToday } from '@storefront-ui/react'
import { Link } from "react-router-dom"
import activity1 from '../img/activity1.svg'
import activity2 from '../img/activity2.svg'
import activity3 from '../img/activity3.svg'
import activity4 from '../img/activity4.svg'
import activity5 from '../img/activity5.svg'
import activity6 from '../img/activity6.svg'
import activity7 from '../img/activity7.svg'
import activity8 from '../img/activity8.svg'
import discountfive from '../img/discountfive.png'
import promotion1 from '../img/promotion1.png'
import promotion2 from '../img/promotion2.png'

const Home = () => {
    const { updateCurrentUser } = useFrappeAuth();
    const { products } = useProducts()

    useEffect(() => {
        updateCurrentUser()
    }, [updateCurrentUser])

    return (
        <>
            <img src={banner} className='w-full absolute top-0 left-0 max-h-[240px] object-cover'/>
            <header className='m-3 bg-white relative pl-5 py-3 m-auto rounded-[6px] mt-[30%] flex' style={{filter:"drop-shadow(0 4px 20px #00000040)",width:"calc(100% - 24px)"}}>
              <div className='w-[80%]'>
                <div className='flex'>
                  <div className='basis-1/3 flex gap-x-1'>
                    <span>฿ </span>
                    850
                  </div>
                  <div className='basis-1/3 flex gap-x-1'>
                    <img src={coin}/>
                    230
                  </div>
                  <div className='basis-1/3 flex gap-x-1'>
                    <img src={coupon}/>
                    8
                  </div>
                </div>

                <div className='flex'>
                  <div className='basis-1/3'>
                    Wallet
                  </div>
                  <div className='basis-1/3'>
                    Coins
                  </div>
                  <div className='basis-1/3'>
                    Coupon
                  </div>
                </div>
              </div>

              <div className='border-l border-l-[#E8E8E8] w-[20%]'>
                <div className='h-full flex items-center justify-center'>
                  <SfIconSearch className="text-[#707070]"/>
                </div>
              </div>
            </header>
            <main className='relative py-3'>
              <div className='flex gap-2 px-3'>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity1} className='w-fit mx-auto'/>
                  <p className='text-xs'>Offer ส่วนลด</p>
                </picture>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity2} className='w-fit mx-auto' />
                  <p className='text-xs'>โปรโมชั่น <br/>50 %</p>
                </picture>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity3} className='w-fit mx-auto'/>
                  <p className='text-xs'>Boxing Day <br/>ขายยกลัง</p>
                </picture>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity4} className='w-fit mx-auto' />
                  <p className='text-xs'>โปรสุดคุ้ม <br/>Mege Sale</p>
                </picture>
              </div>
              <div className='flex gap-2 mt-2 px-3'>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity5} className='w-fit mx-auto'/>
                  <p className='text-xs'>ใส่ CYBER ลด <br/>100 บ.</p>
                </picture>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity6} className='w-fit mx-auto' />
                  <p className='text-xs'>ยินดีต้อนรับ <br/>กลับมา</p>
                </picture>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity7} className='w-fit mx-auto'/>
                  <p className='text-xs'>ลดสูงสุด <br/>60 %</p>
                </picture>
                <picture className='basis-1/4 flex flex-col justify-start text-center'>
                  <img src={activity8} className='w-fit mx-auto' />
                  <p className='text-xs'>อื่นๆ</p>
                </picture>
              </div>

              <h2 className='mt-[30px] px-3'>Celebrate Mid Year Festival</h2>
              
              <div className='mt-3 flex overflow-x-scroll gap-x-6 px-3'>
                <PromotionCard link="/checkout" title="Want to test" image={discountfive} date="อายุการใช้งาน 1 เดือนหลังจากได้รับคูปอง" />
                <PromotionCard link="/checkout" title="Want to test" image={discountfive} date="อายุการใช้งาน 1 เดือนหลังจากได้รับคูปอง" />
              </div>

              <div className='flex flex-col gap-y-[11px] mt-[30px] px-3'>
                <img src={promotion1} />
                <img src={promotion2} />
              </div>

              <div className='mt-[30px]'>
                <h2 className='mb-[5px] px-3'>
                  สินค้าลดราคา
                  <SfIconArrowForward className="w-[16px]"/>
                </h2>

                <div className="flex overflow-x-auto gap-x-[14px] mx-auto px-3">
                  {(products ?? []).map((product) => (
                    <ProductCard
                      key={product.item_code}
                      title={product.name}
                      productId={product.name}
                      itemCode={product.item_code}
                      price={product.formatted_price}
                      thumbnail={product.website_image ? product.website_image : "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"} />
                  ))}
                </div>
              </div>

              <div className='mt-[30px]'>
                <h2 className='mb-[5px] px-3'>
                  สินค้าลดราคา
                  <SfIconArrowForward className="w-[16px]"/>
                </h2>

                <div className="flex overflow-x-auto gap-x-[14px] mx-auto px-3">
                  {(products ?? []).map((product) => (
                    <ProductCard
                      key={product.item_code}
                      title={product.name}
                      productId={product.name}
                      itemCode={product.item_code}
                      price={product.formatted_price}
                      thumbnail={product.website_image ? product.website_image : "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"} />
                  ))}
                </div>
              </div>

              <div className='mt-[30px]'>
                <h2 className='mb-[5px] px-3'>
                  สินค้าลดราคา
                  <SfIconArrowForward className="w-[16px]"/>
                </h2>

                <div className="flex overflow-x-auto gap-x-[14px] mx-auto px-3">
                  {(products ?? []).map((product) => (
                    <ProductCard
                      key={product.item_code}
                      title={product.name}
                      productId={product.name}
                      itemCode={product.item_code}
                      price={product.formatted_price}
                      thumbnail={product.website_image ? product.website_image : "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"} />
                  ))}
                </div>
              </div>
            </main>
        </>
    )
}

export default Home