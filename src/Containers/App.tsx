import React, { useEffect, useRef } from 'react'
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    withRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './Layout'
import Home from './Home'

function App(props) {
    const location = useLocation()

    const ref = useRef()
    useEffect(() => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if (!ref.current) {
            if (token) {
                props.onCheckState(token, userId)
            } else {
                props.onInitActivities()
            }
        }
        ref.current = true
    }, [props])

  
    let AuthGuard = (
        <Switch>
            <Route
                path='/'
                exact
                component={Home}
                render={(props) => (
                    <Home
                        {...props}
                    />
                )}
            />
            <Route
                path='/Auth/login'
                render={(props) => <LoginPage {...props} />}
            />
            <Route
                path='/Auth/signup'
                render={(props) => <SignupPage {...props} />}
            />

            <Route path='/about-us' component={AboutUs} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/faq' component={Faq} />
            <Route path='/terms' component={Terms} />
            <Redirect to='/' />
        </Switch>
    )
    if (props.auth) {
        let admintoShow = (
            <Route
                path='/admin'
                render={(props) => <AdminLayout {...props} />}
            />
        )

        if (props.siteOwner) {
            admintoShow = (
                <Route
                    path='/admin'
                    render={(props) => <SiteOwnerAdmin {...props} />}
                />
            )
        }

        AuthGuard = (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route
                    path='/Auth/login'
                    render={(props) => <AsyncLogin {...props} />}
                />
                <Route path='/about-us' component={AsyncAboutUs} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/faq' component={Faq} />
                <Route path='/terms' component={Terms} />

                {admintoShow}
                <Redirect to='/' />
            </Switch>
        )
    }

    return (
        <div className='rootApp'>
            <a
                href='https://wa.me/+18589463698'
                alt=''
                target='_blank'
                rel='noopener noreferrer'
            >
                <img
                    src={WhatsappLivechat}
                    alt=''
                    className='liveChat__whatsapp'
                />
            </a>
            <Layout isAdmin={location} siteOwner={props.siteOwner}>
                {AuthGuard}
            </Layout>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        siteOwner: state.auth.siteOwner,
        //auth: state.auth.tokenId,
        auth: 'jnsdkfms'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckState: (tokenId, userId) =>
            dispatch(actions.authSuccess(tokenId, userId)),
        onInitActivities: () => dispatch(actions.initActivities()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
