import React from 'react';
import SiteLogoLink from './SiteLogoLinkA';
import ListOfLinks from './ListOfLinks';
import ConnectButton from './ConnectButton';
import ModeSwitcher from './ModeSwitcher';

const HeaderVariantC = ({ title, isTitleVisible, logo, primaryLinks = [], secondaryLinks = [] }) => {
    return (
        <div className="flex items-center relative">
            <SiteLogoLink title={title} isTitleVisible={isTitleVisible} logo={logo} />
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
            <ConnectButton /> {/* Adicione o botão ConnectButton aqui */}
        </div>
    );
};

export default HeaderVariantC;
