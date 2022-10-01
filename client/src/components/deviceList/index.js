import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import DeviceItem from '../deviceItem';
import './style.scss';

const DeviceList = observer(() => {
    const { device } = useContext(Context)

    if (device.devices.length === 0) {
        return <div className='divNotDevice'>
            Товаров с выбранными парамметрами не найдено
        </div>
    }
    
    return (
        <div className='DeviceList'>
            {device.devices.map(device => <DeviceItem key={device.id} device={device} />)}
        </div>
    );
});

export default DeviceList;