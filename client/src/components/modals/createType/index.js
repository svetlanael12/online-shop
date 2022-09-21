import React from 'react';
import './style.scss';

const CreateType = ({show, setVisible}) => {
    return (
        <div className={`typeModal ${show ? 'show' : 'none'}`}> 
            <div className='typeModal-container'>
                <div className='typeModal-block_title'>
                    <h2 className='typeModal__title'>Добавить тип</h2>
                    <button className='typeModal__buttonClose' onClick={() => setVisible(false)}>&times;</button>
                </div>
                <form className='typeModal__form formTypeModal'>
                    <input placeholder='Введите тип...' className='formTypeModal__input'/>
                    <button onClick={() => setVisible(false)} className='formTypeModal__button'>Добавить</button>
                </form>
            </div>
        </div>
            
    );
};

export default CreateType;