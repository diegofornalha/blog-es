import React from 'react';
import { Action } from '../../atoms';
import DropdownLink from './DropdownLink';

const ListOfLinks = ({ links, inMobileMenu }) => {
    return links.map((link, index) => (
        <li key={index}>
            {link.dropdownLinks ? (
                <DropdownLink {...link} inMobileMenu={inMobileMenu} data-sb-field-path={`.${index}`} />
            ) : (
                    <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
                )}
        </li>
    ));
};

export default ListOfLinks;
