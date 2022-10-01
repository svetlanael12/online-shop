import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './styles/DevicePage.scss';
import { fetchOneDevice } from '../http/DeviceAPI';

const DevicePage = observer(() => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const addBasket = (name, price) => {
        if (JSON.parse(localStorage.getItem("basket"))) {
            if (JSON.parse(localStorage.getItem("basket")).length === 0) {
                localStorage.setItem("basket", JSON.stringify({basket: [{deviceId: id, name: name, price: price, count: 1}], count: 1, totalPrice: price}))
            } else {
                let storage = JSON.parse(localStorage.getItem("basket"))
                let totalCount = storage.count
                let basket = storage.basket
                let totalPrice = storage.totalPrice
                let ind = basket.findIndex((elem) => id === elem.deviceId)
                if (ind === -1) {
                    basket.push({deviceId: id, name: name, price: price, count: 1})
                } else {
                    basket[ind].count += 1
                }
                totalCount += 1
                totalPrice += price
                localStorage.setItem("basket", JSON.stringify({basket, count: totalCount, totalPrice: totalPrice}))
            
            }
            } else {
            localStorage.setItem("basket", JSON.stringify({basket: [{deviceId: id, name: name, price: price, count: 1}], count: 1, totalPrice: price}))
        }
        alert('Товар добавлен в корзину')
    }

    const devicePage = cn('DevicePage');
    return (
        <article className='container'>
            <div className={devicePage()}>
                <img src={process.env.REACT_APP_API_URL + device.img} alt={device.name} width='250px' className={devicePage('DeviceImage')}/>
                <div className={devicePage('text')}>
                    <div className={devicePage('text-container')}>
                        {/* <section className={devicePage('block-descriptions')}>
                            <h2 className={devicePage('title')}>Описание:</h2>
                            <p className={devicePage('description')}>Привет, скорость! Полный красок 6,1-дюймовый дисплей Super Retina XDR. Передняя панель с инновационной технологией Ceramic Shield, снижает риск повреждения дисплея в 4 раза. Потрясающая четкость изображения при недостаточной освещенности во время съемки с ночным режимом. Усовершенствованная система камер большой тройки с четырехкратным оптическим зумом. Съемка, редактирование и воспроизведение видео кинематографического качества все это теперь в стандарте Dolby Vision. Мощный процессор A14 с искусственным интеллектом внутри. Приготовьтесь, вас ждут яркие открытия.</p>
                        </section> */}
                        <section className={devicePage('block-basketPush', {block: 'basketPush'})}>
                            <h3 className={devicePage('title-name')}>{device.name}</h3>
                            <span className={devicePage('title-price')}>
                                {new Intl.NumberFormat('ru-RU').format(device.price)} &#8381;
                            </span>
                            <span className={devicePage('title-rating')}>Рейтинг: {device.rating} &#9734;</span>
                            <button 
                            type='button'
                            className={devicePage('btn-addBasket')}
                            onClick={() => addBasket(device.name, device.price)}
                            >
                                В корзину
                            </button>
                        </section>
                    </div>
                    <h2 className={devicePage('title')} style={{marginTop: '2rem'}}>Характеристики:</h2>
                    <ul className={devicePage('Characteristics')}>
                        {device.info.map(info => <li key={info.id}>{info.title}: {info.description}</li>)}
                    </ul>
                </div>
            </div>
        </article>
    );
});

export default DevicePage;