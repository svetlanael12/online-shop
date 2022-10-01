import React, { useContext, useEffect, useState } from 'react';
import { createDevice, fetchBrands, fetchTypes } from '../../../http/DeviceAPI';
import { Context } from '../../../index';
import Select from '../../UI/select';

import '../style.scss';
import './style.scss';

const CreateDevice = ({show, setVisible}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(() => setVisible(false))
    }

    return (
        <div className={`modal ${show ? 'show' : 'none'}`}> 
            <div className='modal-container'>
                <div className='modal-block_title'>
                    <h2 className='modal__title'>Добавить устройство</h2>
                    <button className='modal__buttonClose' onClick={() => setVisible(false)}>&times;</button>
                </div>
                <form className='modal__form formDeviceModal'>
                    <input 
                    className='modal__input formDeviceModal__input'
                    placeholder='Введите название...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                    className='modal__input formDeviceModal__input'
                    placeholder='Введите стоимость...'
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <Select category='бренд' selectOptions={device.brands} type='brand' />
                    <Select category='тип' selectOptions={device.types} type='type' />
                    <button className='formDeviceModal__button modal__button' type='button' onClick={addInfo}>Добавить характиристику</button>
                    {info.map(i => <div 
                        key={i.number}
                        className='modal__inputsInfo info'
                        >
                            <input 
                            placeholder='Введите свойство' 
                            className='info__input'
                            value={i.title}
                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                            />
                            <input 
                            placeholder='Введите описание' 
                            className='info__input'
                            value={i.description}
                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                            />
                            <button 
                            className='info__button_remove' 
                            type='button'
                            onClick={() => removeInfo(i.number)}
                            >
                                &times;
                            </button>
                        </div>)}
                        <input 
                        className='formDeviceModal__button modal__button' 
                        type='file' 
                        onChange={selectFile}
                        />
                    <button 
                    onClick={addDevice} 
                    className='formDeviceModal__button modal__button'
                    type='button'
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateDevice;