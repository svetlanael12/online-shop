import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import './style.scss';
import DeviceItem from '../deviceItem';

const DeviceList = observer(() => {
    const { device } = useContext(Context)
    return (
        <div className='DeviceList'>
            {device.devices.map(device => <DeviceItem key={device.id} device={device} />)}
        </div>
    );
});

export default DeviceList;