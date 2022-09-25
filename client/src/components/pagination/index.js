import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';
import './style.scss';

const Pagination = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []
    
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <ul className='pagination container'>
            {pages.map(page => <li 
            key={page}
            className={device.page === page ? 'pagination-item active' : 'pagination-item'}
            onClick={(e) => {
                device.setPage(page)
            }}
            >
                {page}
            </li>)}
        </ul>
    );
});

export default Pagination;