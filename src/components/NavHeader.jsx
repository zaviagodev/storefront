import {
    SfButton,
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconPerson,
    SfIconMenu,
    SfBadge,
} from '@storefront-ui/react';
import viteLogo from '/vite.svg'
import brandLogo from '../img/logo.svg'
import cartIcon from '../img/cart.svg'
import messageIcon from '../img/message-circle.svg'
import banner from '../img/banner.png'
import { useFrappeAuth } from 'frappe-react-sdk';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const NavHeader = () => {
    const navigate = useNavigate();
    const { cartCount, setIsOpen } = useCart()
    const { currentUser } = useFrappeAuth()

    const actionItems = [
      {
        icon: (<img src={messageIcon}/>),
        label: '',
        ariaLabel: 'Message',
        role: 'button',
        onClick: () => setIsOpen(true)
      },
      {
        icon: (<img src={cartIcon}/>),
        label: '',
        ariaLabel: 'Cart',
        role: 'button',
        onClick: () => null,
      },
    ];

    return (
        <header className="relative flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-transparent z-[999]">
            <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
                <a
                  href="/"
                  aria-label="SF Homepage"
                  className="flex mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
                >
                  <picture>
                    <source srcSet={brandLogo} media="(min-width: 768px)" />
                    <img
                      src={brandLogo}
                      alt="Sf Logo"
                    //   className="w-8 h-8 md:h-6 lg:h-[1.75rem]"
                    />
                  </picture>
                </a>

                <nav className="flex-1 flex justify-end lg:order-last lg:ml-4">
                    <div className="flex flex-row flex-nowrap">
                        {actionItems.map((actionItem) => (
                            <SfButton
                              key={actionItem.ariaLabel}
                              className="relative ml-2 rounded-[99px] bg-white hover:bg-white"
                              aria-label={actionItem.ariaLabel}
                              variant="tertiary"
                              square
                              slotPrefix={actionItem.icon}
                              onClick={actionItem.onClick}
                            >
                              {actionItem.ariaLabel === 'Cart' && (
                                <SfBadge content={cartCount} />
                              )}
                              {actionItem.role === 'login' && (
                                <p className="hidden xl:inline-flex whitespace-nowrap">{actionItem.label}</p>
                              )}
                            </SfButton>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavHeader
