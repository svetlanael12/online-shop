import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './styles/DevicePage.scss';
import { fetchOneDevice } from '../http/DeviceAPI';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

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
                            <button className={devicePage('btn-addBasket')}>В корзину</button>
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
};

export default DevicePage;