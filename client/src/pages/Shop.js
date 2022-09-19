import React from 'react';
import TypeBar from '../components/typebar';

const Shop = () => {
    return (
        <section className='container'>
            <div>тут строка брендов</div>
            {/* тут слева блок с выбором девайса, а справа товары в 4 колонки */}
            <div className=''>
                <TypeBar />
            </div>
        </section>
    );
};

export default Shop;