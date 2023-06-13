import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';
import { getMatchingColor } from '../../../utils/themeColorMapper';
import { DisplayModeContext } from '../../../context/displayMode';
import ListOfLinks from './ListOfLinks';
import ConnectButton from './ConnectButton';
import WalletModal from './WalletModal';

export default function MobileMenu(props) {
    const { primaryLinks = [], secondaryLinks = [], secondaryColors = 'colors-d' } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const { displayMode } = React.useContext(DisplayModeContext);

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);
    return (
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <MenuIcon className="fill-current h-6 w-6" />
            </button>
            <div
                className={classNames(
                    getMatchingColor(displayMode, secondaryColors),
                    'fixed',
                    'inset-0',
                    'px-4',
                    'sm:px-8',
                    'py-5',
                    'overflow-y-auto',
                    'z-20',
                    isMenuOpen ? 'block' : 'hidden'
               )}
            >
                <div className="flex flex-col min-h-full">
                    <div className="flex items-center justify-between mb-10">
                        <button aria-label="Close Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                            <CloseIcon className="fill-current h-6 w-6" />
                        </button>
                    </div>
                    {primaryLinks.length > 0 && (
                        <ul className="flex-grow mb-10 space-y-6" data-sb-field-path=".primaryLinks">
                            <ListOfLinks links={primaryLinks} inMobileMenu={true} />
                        </ul>
                    )}
                    {secondaryLinks.length > 0 && (
                        <ul className="mb-10 space-y-5" data-sb-field-path=".secondaryLinks">
                            <ListOfLinks links={secondaryLinks} inMobileMenu={true} />
                        </ul>
                    )}
                    <ConnectButton /> {/* Adicione o botão ConnectButton aqui */}
                    <WalletModal /> {/* Adicione o componente WalletModal aqui */}
                </div>
            </div>
        </div>
    );
}
