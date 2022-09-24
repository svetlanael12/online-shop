import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import BrandBar from '../components/brandbar';
import DeviceList from '../components/deviceList';
import TypeBar from '../components/typebar';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/DeviceAPI';
import './styles/Shop.scss';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])

    return (
        <section className='container container-shop'>
                <TypeBar />
                <div className='container-shop__brandBar_and_cards'>
                    <BrandBar />
                    <DeviceList />
                </div>
        </section>
    );
});

export default Shop;