import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { cn } from '@bem-react/classname';
import './style.scss';

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    const brandBar = cn('BrandBar')
    return (
        <ul className={brandBar()}>
            {device.brands.map(brand => <li
                className={`${brandBar('item')} ${(brand.id === device.selectedBrand.id) ? 'active' : ''}`}
                key={brand.id}
                onClick={(e) => {
                    device.setSelectedBrand(brand)
                }}
            >
                {brand.name}
            </li>)}
        </ul>
    );
});

export default BrandBar;