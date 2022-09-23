import React, { useRef, useState} from 'react';
import './style.scss';

const Select = ({category, selectOptions}) => {
    const [selectValue, setSelectValue] = useState('');
    const listOptions = useRef(null);

    const showOptions = (e) => {
        listOptions.current.classList.toggle('none')
    };
    const selectedOption = (e) => {
        setSelectValue(e.target.getAttribute('value'));
        listOptions.current.classList.add('none')
    }
    return (
            <div className='form-select'>
                <input className='select-button' type='button' value={selectValue ? selectValue : `Выберите ${category}`} onClick={showOptions}/>
                <ul className='list-options none' ref={listOptions}>
                    {selectOptions.map((opt) => <li 
                    className='list-options__item'
                    key={opt.id} 
                    value={opt.name} 
                    onClick={selectedOption}
                    >
                        {opt.name}
                    </li>)}
                </ul>
            </div>
    );
};

export default Select;