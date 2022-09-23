import React, { useContext, useState } from 'react';
import { Context } from '../../../index';
import Select from '../../UI/select';

import '../style.scss';
import './style.scss';

const CreateDevice = ({show, setVisible}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <div className={`modal ${show ? 'show' : 'none'}`}> 
            <div className='modal-container'>
                <div className='modal-block_title'>
                    <h2 className='modal__title'>Добавить устройство</h2>
                    <button className='modal__buttonClose' onClick={() => setVisible(false)}>&times;</button>
                </div>
                <form className='modal__form formDeviceModal'>
                    <Select category='бренд' selectOptions={device.brands}/>
                    <Select category='тип' selectOptions={device.types}/>
                    <button className='formDeviceModal__button modal__button' type='button' onClick={addInfo}>Добавить характиристику</button>
                    {info.map(i => <div 
                        key={i.number}
                        className='modal__inputsInfo info'
                        >
                            <input placeholder='Введите свойство' className='info__input'/>
                            <input placeholder='Введите описание' className='info__input'/>
                            <button 
                            className='info__button_remove' 
                            type='button'
                            onClick={() => removeInfo(i.number)}
                            >
                                &times;
                            </button>
                        </div>)}
                    <button onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                    }} className='formDeviceModal__button modal__button'>Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default CreateDevice;