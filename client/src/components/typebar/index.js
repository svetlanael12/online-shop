import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { cn } from '@bem-react/classname';
import './style.scss';

const TypeBar = observer(() => {
    const { device } = useContext(Context)

    const typeBar = cn('TypeBar')
    return (
        <ul className={typeBar()}>
            {device.types.map(type => <li
                className={`${typeBar('item')} ${(type.id === device.selectedType.id) ? 'active': ''}`}
                key={type.id}
                onClick={(e) => {
                    device.setSelectedType(type)
                }}
            >{type.name}
            </li>)}
            <li 
                className={typeBar('item', {btn: 'remove'})}
                onClick={(e) => {
                    device.setSelectedType({})
                    device.setSelectedBrand({})
                }}
            >&times; Сбросить фильтры</li>
        </ul>
    );
});

export default TypeBar;