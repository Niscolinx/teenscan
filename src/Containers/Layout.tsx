import React from 'react'
// import { useLastLocation } from 'react-router-last-location'
import {useHistory} from 'react-router-dom'

import Header from '../main/layout/Header'
//import Footer from '../main/layout/Footer'

function Layout(props) {
   // const lastLocation = useLastLocation()
    const history = useHistory()

    let fromlocationPath = ''
    // for (let i in lastLocation) {
    //     if (i === 'pathname') {
    //         fromlocationPath = lastLocation[i]
    //     }
    // }
    const fromLocationSplit = fromlocationPath.split(' ')


    //Check how this can be added to redux and called from there
    let toRender

    const adminPath = props.isAdmin.pathname
    let isAdmin = adminPath.includes('/admin')

    if (isAdmin) {

        if(adminPath === '/admin' || adminPath === '/admin/'){
            history.push('/admin/dashboard')
        }

      

        toRender = props.children
    } else {
        if (fromLocationSplit[0].includes('admin')) {
            window.location.reload()
        } 
        toRender = (
            <>
                <div className='section-subHeader'>
                    <Header />
                </div>
                <main className='main'>{props.children}</main>
                <div className='section-footer'>
                    <Footer />
                </div>{' '}
            </>
        )
    }

    return <>{toRender}</>
}

export default Layout
