import React  from 'react';
import { App } from '../components/App';
import Header from '../components/Layout/Header';

const Layout = () => {
    return <div className='main'>

        <Header/>
        <App/>
    </div>
}

export default Layout