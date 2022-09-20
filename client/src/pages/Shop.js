import React from 'react';
import BrandBar from '../components/brandbar';
import DeviceList from '../components/deviceList';
import TypeBar from '../components/typebar';
import './styles/Shop.scss';

const Shop = () => {
    return (
        <section className='container container-shop'>
                <TypeBar />
                <div className='container-shop__brandBar_and_cards'>
                    <BrandBar />
                    <DeviceList />
                </div>
        </section>
    );
};

export default Shop;