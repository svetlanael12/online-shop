import React, { useContext, useRef, useState} from 'react';
import { Context } from '../../..';

import './style.scss';

const Select = ({category, selectOptions, type}) => {
    const {device} = useContext(Context)
    const listOptions = useRef(null);
    const [selectValue, setSelectValue] = useState('');

    function showOptions() {
        listOptions.current.classList.toggle('none')
    };

    const selectedOption = (opt, target) => {
        setSelectValue(target.getAttribute('value'))
        if (type === 'type') {
            device.setSelectedType(opt)
        } else if (type === 'brand') {
            device.setSelectedBrand(opt)
        }
        showOptions();
    }
    return (
            <div className='form-select'>
                <input className='select-button' type='button' value={selectValue ? selectValue : `Выберите ${category}`} onClick={showOptions}/>
                <ul className='list-options none' ref={listOptions}>
                    {selectOptions.map((opt) => <li 
                    className='list-options__item'
                    key={opt.id} 
                    value={opt.name} 
                    onClick={(e) => selectedOption(opt, e.target)}
                    >
                        {opt.name}
                    </li>)}
                </ul>
            </div>
    );
};

export default Select;