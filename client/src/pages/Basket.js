import React from 'react';

const Basket = () => {
    const basket = JSON.parse(localStorage.getItem("basket"))
    return (
        <div>
            {
                basket ?
                <div>Корзина</div> :
                <div>Корзина пуста!</div>
            }
        </div>
    );
};

export default Basket;