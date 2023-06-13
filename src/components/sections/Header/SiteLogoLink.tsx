import * as React from 'react';
import ImageBlock from '../../molecules/ImageBlock';
import { Link } from '../../atoms';
import classNames from 'classnames';


export default function SiteLogoLink({ title, isTitleVisible, logo }) {
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
