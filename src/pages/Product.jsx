import { useCounter } from 'react-use';
import { clamp } from '@storefront-ui/shared';
import { React, useState, useContext } from 'react';
import {
    SfButton,
    SfLink,
    SfIconShoppingCart,
    SfIconSell,
    SfIconPackage,
    SfIconRemove,
    SfIconAdd,
    SfIconWarehouse,
    SfIconSafetyCheck,
    SfIconShoppingCartCheckout,
    SfIconFavorite,
    SfIconArrowForward,
    SfScrollable
} from '@storefront-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { ArrowLeft, ShoppingBag01, Heart } from '@untitled-ui/icons-react';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';

const Product = () => {
    const { id } = useParams();
    const { get } = useProducts();
    const { cart, addToCart } = useCart();
    const product = get(id);
    const inputId = "useId('input')";
    const min = 1;
    const max = 999;
    const [value, { inc, dec, set }] = useCounter(min);

    const { products } = useProducts()

    const items = [
      {
        title: "ตารางขนาด",
        content: (<>
          <div className="flex">
            <SfIconPackage size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
            <p className="text-sm">
              Free shipping, arrives by Thu, Apr 7. Want it faster?
              <SfLink href="#" variant="secondary" className="mx-1">
                Add an address
              </SfLink>
              to see options
            </p>
          </div>
          <div className="flex mt-4">
            <SfIconWarehouse size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
            <p className="text-sm">
              Pickup not available at your shop.
              <SfLink href="#" variant="secondary" className="ml-1">
                Check availability nearby
              </SfLink>
            </p>
          </div>
          <div className="flex mt-4">
            <SfIconSafetyCheck size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
            <p className="text-sm">
              Free 30-days returns.
              <SfLink href="#" variant="secondary" className="ml-1">
                Details
              </SfLink>
            </p>
          </div>
        </>)
      },
      {
        title: "Test Number Two",
        content: (
          <>
            <h2>WHAT?!</h2>
            <p>วัสดุ</p>
          </>
        )
      }
    ]

    return (
      <>
        <header className='p-[8px] bg-black w-full text-center text-white'>
          <p>สมาชิกใหม่รับ ของขวัญฟรี กดรับเลย !! 🎁</p>
        </header>
        <nav className='flex justify-between p-4 absolute top-[40px] z-[999] w-full'>
          <Link to="/" className='p-[9px] rounded-[99px] bg-[#FFFFFF94]' style={{backdropFilter:"blur(6px)"}}>
            <ArrowLeft />
          </Link>
          <button className='p-[9px] rounded-[99px] bg-[#FFFFFF94]' style={{backdropFilter:"blur(6px)"}}>
            <ShoppingBag01 />
          </button>
        </nav>
        <main className="mx-auto">
            <div className="relative flex w-full max-h-[600px] aspect-[4/3] ">
                <SfScrollable
                    className="relative w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    direction="vertical"
                    wrapperClassName="h-full"
                    buttonsPlacement="none"
                    drag={{ containerWidth: true }}
                >
                    <div className="absolute inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">
                        <SfIconSell size="sm" className="mr-1.5" />
                        Sale
                    </div>
                    <div className="flex justify-center h-full basis-full shrink-0 grow snap-center">
                        <img
                            src={`${product?.website_image}`}
                            className="object-contain w-auto h-full"
                            aria-label={product?.website_image}
                            alt={product?.website_image}
                        />
                    </div>
                </SfScrollable>
            </div>
            <section className="md:max-w-[640px] mt-4 px-4">
              <div className='flex justify-between w-full'>
                <h1 className="mb-1 font-bold typography-headline-4 inter">
                  {product?.item_name}
                </h1>
                <strong className="block font-bold typography-headline-3 inter">{product?.formatted_price}</strong>
              </div>
                <div dangerouslySetInnerHTML={{ __html: product?.short_description }} />
                <div className='pt-2'>
                    {
                        cart[product?.item_code] && (
                            <div className="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">
                                <SfIconShoppingCartCheckout />{cart[product?.item_code]} in cart
                            </div>
                        )
                    }
                    <div className="items-start flex">
                      <SfButton onClick={() => addToCart(product?.item_code, value)} type="button" size="lg" className="w-full" style={{backgroundColor:"black"}}>
                        สั่งซื้อสินค้า
                      </SfButton>
                        <SfButton
                            type="button"
                            variant="tertiary"
                            size="lg"
                            square
                            className="bg-white border border-black ml-4 basis-[20%] text-center py-3 w-[62px] h-[48px]"
                            aria-label="Add to wishlist"
                        >
                            {/* <SfIconFavorite size="sm" color='black'/> */}
                            <Heart color="black" fill="red"/>
                        </SfButton>
                      {/* <div className="flex flex-col items-stretch xs:items-center xs:inline-flex ml-4">
                        
                        <div className="flex border border-neutral-300 rounded-md">
                            <SfButton
                                type="button"
                                variant="tertiary"
                                square
                                className="rounded-r-none p-3"
                                disabled={value <= min}
                                aria-controls={inputId}
                                aria-label="Decrease value"
                                onClick={() => dec()}
                            >
                                <SfIconRemove />
                            </SfButton>
                            <input
                                id={inputId}
                                type="number"
                                role="spinbutton"
                                className="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                                min={min}
                                max={max}
                                value={value}
                                onChange={handleOnChange}
                            />
                            <SfButton
                                type="button"
                                variant="tertiary"
                                square
                                className="rounded-l-none p-3"
                                disabled={value >= max}
                                aria-controls={inputId}
                                aria-label="Increase value"
                                onClick={() => inc()}
                            >
                                <SfIconAdd />
                            </SfButton>
                        </div>
                        <p className="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
                          <strong className="text-neutral-900">{product?.in_stock ? "✔ In Stock" : "❌ sold out"}</strong>
                        </p>
                      </div> */}
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: product?.web_long_description }} />
            </section>

            <Accordion items={items} />

            <div className='mt-[22px]'>
              <h2 className='text-[#3D3D3D] font-bold flex items-center px-5 mb-[14px] leading-6'>
                หากคุณชอบสไตล์นี้
                <SfIconArrowForward className="w-[18px] text-black ml-2"/>
              </h2>

                <div className="flex overflow-x-auto gap-x-[14px] mx-auto px-5">
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

export default Product


