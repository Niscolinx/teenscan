import React from 'react'
import { LastLocationType } from 'react-router-last-location'

// import { useLastLocation } from 'react-router-last-location'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface LayoutProps {
    isAdmin: LastLocationType
    children: JSX.Element
}

function Layout(props: LayoutProps) {

    let toRender


    toRender = (
        <>
        
            <div className='header'>
                <Header />
            </div>
            <main className='main'>{props.children}</main>
            <div className='section-footer'>
                <Footer />
            </div>
        </>
    )

    return <>{toRender}</>
}

export default Layout
