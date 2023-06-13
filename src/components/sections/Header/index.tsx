import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import WalletModal from './WalletModal';

import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';
import DropdownLink from './DropdownLink';
import LocaleSelector from './LocaleSelector';
import ModeSwitcher from './ModeSwitcher';
import ConnectButton from './ConnectButton';
import { DisplayModeContext } from '../../../context/displayMode';
import { getMatchingColor } from '../../../utils/themeColorMapper';
import Image from 'next/image';

// Import the new components
import HeaderVariantA from './HeaderVariantA';
import HeaderVariantB from './HeaderVariantB';
import HeaderVariantC from './HeaderVariantC';

export default function Header(props) {
    const { isSticky, primaryColors = 'colors-d', styles = {}, annotationPrefix, ...rest } = props;
    const { displayMode } = React.useContext(DisplayModeContext);

    return (
        <header
            className={classNames(
                'sb-component',
                'sb-component-header',
                getMatchingColor(displayMode, primaryColors),
                styles.self?.padding ?? 'py-5 px-4',
                isSticky ? 'sticky top-0 z-10' : 'relative'
            )}
            data-sb-field-path={`${annotationPrefix}:header`}
        >
            <div className={classNames('mx-auto', mapHeaderMaxWidthStyles(styles.self?.width ?? 'narrow'))}>
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                <HeaderVariants {...rest} />
            </div>
        </header>
    );
}

function HeaderVariants(props) {
    const { headerVariant = 'variant-a', ...rest } = props;
    switch (headerVariant) {
        case 'variant-a':
            return <HeaderVariantA {...rest} />;
        case 'variant-b':
            return <HeaderVariantB {...rest} />;
        case 'variant-c':
            return <HeaderVariantC {...rest} />;
        default:
            return null;
    }
}

// Rest of the code...
