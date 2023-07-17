import { useState } from 'react';
import {
    SfScrollable,
} from '@storefront-ui/react';
import { useCounter } from 'react-use';
import { useId, ChangeEvent } from 'react';
import { clamp } from '@storefront-ui/shared';
import {
    SfRating,
    SfButton,
    SfLink,
    SfCounter,
    SfIconShoppingCart,
    SfIconSell,
    SfIconPackage,
    SfIconRemove,
    SfIconAdd,
    SfIconWarehouse,
    SfIconSafetyCheck,
    SfIconShoppingCartCheckout,
} from '@storefront-ui/react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useFrappeAuth } from 'frappe-react-sdk';

const Product = () => {
    const { id } = useParams();
    const { get } = useProducts();
    const product = get(id);
    const inputId = "useId('input')";
    const min = 1;
    const max = 999;
    const [value, { inc, dec, set }] = useCounter(min);

    function handleOnChange(event) {
        const { value: currentValue } = event.target;
        const nextValue = parseFloat(currentValue);
        set(Number(clamp(nextValue, min, max)));
    }


    return (
        <main className="mx-auto p-4">
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
                            src={`https://umer2002.aca.fc.zaviago.com${product?.thumbnail}`}
                            className="object-contain w-auto h-full"
                            aria-label={product?.thumbnail}
                            alt={product?.thumbnail}
                        />
                    </div>
                </SfScrollable>
            </div>
            <section className="md:max-w-[640px] mt-4 md:mt-6">
                <h1 className="mb-1 font-bold typography-headline-4">
                    {product?.item_name}
                </h1>
                <strong className="block font-bold typography-headline-3">$2,345.99</strong>
                <div className="inline-flex items-center mt-4 mb-2">
                    <SfRating size="xs" value={3} max={5} />
                    <SfCounter className="ml-1" size="xs">
                        123
                    </SfCounter>
                    <SfLink href="#" variant="secondary" className="ml-2 text-xs text-neutral-500">
                        123 reviews
                    </SfLink>
                </div>
                <ul className="mb-4 font-normal typography-text-sm">
                    <li>HD Pictures & Videos and FPV Function</li>
                    <li>Intelligent Voice Control</li>
                    <li>Multiple Fun Flights</li>
                    <li>Easy to Use</li>
                    <li>Foldable Design & Double Flight Time</li>
                </ul>
                <div className="py-4 mb-4 border-gray-200 border-y">
                    <div className="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">
                        <SfIconShoppingCartCheckout />1 in cart
                    </div>
                    <div className="items-start xs:flex">
                        <div className="flex flex-col items-stretch xs:items-center xs:inline-flex">
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
                                <strong className="text-neutral-900">{max}</strong> in stock
                            </p>
                        </div>
                        <SfButton type="button" size="lg" className="w-full xs:ml-4" slotPrefix={<SfIconShoppingCart size="sm" />}>
                            Add to cart
                        </SfButton>
                    </div>
                </div>
                <div className="flex first:mt-4">
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
            </section>
        </main >
    )
}

export default Product


