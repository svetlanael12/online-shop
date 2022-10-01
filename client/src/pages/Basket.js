import React, { useEffect, useState } from 'react';
import './styles/Basket.scss';

const Basket = () => {
    const [basketList, setBasketList] = useState(0)
    const [totalPrice, setTotalPrice]= useState(0)

    const deleteProductBasket = (key, price, count) => {
        let basket = JSON.parse(localStorage.getItem("basket"))
        basket.basket = Array.from(basket.basket).filter((elem) => elem.deviceId !== key)
        let totalPrice = basket.totalPrice
        let totalCount = basket.count
        totalCount -= count
        totalPrice -= price*count
        localStorage.setItem("basket", JSON.stringify({basket: basket.basket, count: totalCount, totalPrice: totalPrice}))
        
        setTotalPrice(totalPrice)
        setBasketList(basket.length)
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("basket"))) {
            setTotalPrice(JSON.parse(localStorage.getItem("basket")).totalPrice)
            setBasketList(JSON.parse(localStorage.getItem("basket")).basket.length)
        }
    }, [JSON.parse(localStorage.getItem("basket")).basket.length])

    return (
        <div>
            {
                basketList > 0 ?
                <div className='container'>
                <div className='totalPrice'>Итого к оплате: {new Intl.NumberFormat('ru-RU').format(totalPrice)} &#8381;</div>
                <ul className='basket-container basket'>
                    {
                        JSON.parse(localStorage.getItem("basket")).basket.map(product => 
                            <li className='basket__item' key={product.deviceId}>
                                <div className='basket__item_text'>
                                    <span>{product.name}</span>
                                    <span>Стоимость: {product.price}</span>
                                    <span>Количество: {product.count}</span>
                                </div>
                                <button 
                                className='basket__item_btnRemove'
                                type='button'
                                onClick={() => deleteProductBasket(product.deviceId, product.price, product.count)}
                                >
                                    &times;
                                </button>
                            </li>
                        )
                    }
                </ul>
                </div> :
                <div className='divNotBasket'>Корзина пуста!</div>
            }
        </div>
    );
};

export default Basket;