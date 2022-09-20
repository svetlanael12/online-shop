import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './style.scss';
import star from '../../svg/star.svg';
import { DEVICE_ROUTE } from '../../utils/consts';

const DeviceItem = ({device}) => {
    const history = useNavigate()
    
    const deviceCard = cn('DeviceCard');
    return (
        <div className={deviceCard()} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <img src={device.img} width='150'/>
            <div className={deviceCard('text')}>
                <span className={deviceCard('title', {name: 'brand'})}>Apple</span>
                <span className={deviceCard('title', {span: 'price'})}>{device.price} &#8381;</span>
                <span className={deviceCard('title')}>{device.name}</span>
                <div className={deviceCard('rating')}>
                    <span className={deviceCard('rating-number')}>5</span>
                    <img src={star} alt='☆' width='15' height='15'/>
                </div>
            </div>
        </div>
    );
};

export default DeviceItem;