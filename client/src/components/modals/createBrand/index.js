import React from 'react';
import '../style.scss';
import './style.scss';

const CreateBrand = ({show, setVisible}) => {
    return (
        <div className={`modal ${show ? 'show' : 'none'}`}> 
            <div className='modal-container'>
                <div className='modal-block_title'>
                    <h2 className='modal__title'>Добавить бренд</h2>
                    <button className='modal__buttonClose' onClick={() => setVisible(false)}>&times;</button>
                </div>
                <form className='modal__form formBrandModal'>
                    <input placeholder='Введите название бренда...' className='formBrandModal__input modal__input'/>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                    }} className='formBrandModal__button modal__button'>Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default CreateBrand;