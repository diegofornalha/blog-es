import * as React from 'react';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import DropdownLink from './DropdownLink';
import LocaleSelector from './LocaleSelector';
import ModeSwitcher from './ModeSwitcher';
import ConnectButton from './ConnectButton';
import WalletModal from './WalletModal';

export default function HeaderVariantC(props) {
    const { title, isTitleVisible, logo, primaryLinks = [], secondaryLinks = [] } = props;
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const handleConnect = () => {
        setIsModalOpen(true);
    };
    return (
        <div className="flex items-center relative">
            <SiteLogoLink title={title} isTitleVisible={isTitleVisible} logo={logo} />
            {LocaleSelector()}
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".primaryLinks">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'lg:items-center', 'space-x-8', primaryLinks.length > 0 ? 'ml-8' : 'ml-auto')}
                    data-sb-field-path=".secondaryLinks"
                >
                    <ListOfLinks links={secondaryLinks} inMobileMenu={false} />
                    <ModeSwitcher />
                </ul>
            )}
            <ConnectButton onClick={handleConnect} /> {/* Adicione o manipulador de clique aqui */}
            <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> {/* Adicione as props isOpen e onClose aqui */}
        </div>
    );
}

function SiteLogoLink({ title, isTitleVisible, logo }) {
    if (!(logo || (title && isTitleVisible))) {
        return null;
    }
    return (
        <div className="mr-8">
            <Link href="/" aria-label={title} className="sb-header-logo flex items-center">
                {logo && <ImageBlock {...logo} className={classNames('max-h-12', { 'mr-2': isTitleVisible })} data-sb-field-path=".logo" />}
                {title && isTitleVisible && (
                    <span className="text-2xl uppercase font-medium" data-sb-field-path=".title">
                        {title}
                    </span>
                )}
            </Link>
        </div>
    );
}

function ListOfLinks({ links, inMobileMenu }) {
    return links.map((link, index) => (
        <li key={index}>
            {link.dropdownLinks ? (
                <DropdownLink {...link} inMobileMenu={inMobileMenu} data-sb-field-path={`.${index}`} />
            ) : (
                <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
            )}
        </li>
    ));
}
