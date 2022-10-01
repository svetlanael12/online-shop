import React, { useState } from 'react';
import { createType } from '../../../http/DeviceAPI';
import '../style.scss';
import './style.scss';

const CreateType = ({show, setVisible}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(() => {
            setValue('')
            setVisible(false)
        })
    }

    return (
        <div className={`modal ${show ? 'show' : 'none'}`}> 
            <div className='modal-container'>
                <div className='modal-block_title'>
                    <h2 className='modal__title'>Добавить тип</h2>
                    <button 
                    className='modal__buttonClose' 
                    onClick={() => setVisible(false)}
                    >
                        &times;
                    </button>
                </div>
                <form className='modal__form formTypeModal'>
                    <input 
                    placeholder='Введите название типа...' 
                    className='formTypeModal__input modal__input'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                    <button 
                    onClick={addType} 
                    type='button' 
                    className='formTypeModal__button modal__button'
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </div>
            
    );
};

export default CreateType;