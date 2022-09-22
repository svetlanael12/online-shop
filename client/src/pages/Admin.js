import React, { useState } from 'react';
import CreateType from '../components/modals/createType';
import CreateDevice from '../components/modals/createDevice';
import CreateBrand from '../components/modals/createBrand';
import './styles/Admin.scss';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <article className='container'>
            <div className='container-admin'>
                <button className='admin-btn' onClick={() => setTypeVisible(true)}>Добавить тип</button>
                <button className='admin-btn' onClick={() => setBrandVisible(true)}>Добавить бренд</button>
                <button className='admin-btn' onClick={() => setDeviceVisible(true)}>Добавить устройство</button>
            </div>
            <CreateType show={typeVisible} setVisible={setTypeVisible} />
            <CreateDevice show={deviceVisible} setVisible={setDeviceVisible} />
            <CreateBrand show={brandVisible} setVisible={setBrandVisible} />
        </article>
    );
};

export default Admin;