import React from 'react';
import SiteLogoLink from './SiteLogoLink';
import ListOfLinks from './ListOfLinks';
import ModeSwitcher from './ModeSwitcher';
import ConnectButton from './ConnectButton';

const HeaderVariantB = ({ title, isTitleVisible, logo, primaryLinks, secondaryLinks }) => {
    return (
        <div className="flex items-center relative">
            <SiteLogoLink title={title} isTitleVisible={isTitleVisible} logo={logo} />
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto" data-sb-field-path=".primaryLinks">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".secondaryLinks">
                    <ListOfLinks links={secondaryLinks} inMobileMenu={false} />
                    <ModeSwitcher />
                </ul>
            )}
            <ConnectButton />
        </div>
    );
};

export default HeaderVariantB;
