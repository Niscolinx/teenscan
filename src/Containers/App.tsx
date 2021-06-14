import React from 'react'
import {
    Switch,
    Route,
    Redirect,
    useLocation
} from 'react-router-dom'
// import { connect } from 'react-redux'
 import Layout from './Layout'
import Home from '../views/Home'
import About from '../views/About'
import { LastLocationType } from 'react-router-last-location'
import Courses from '../views/Courses'



function App() {
   const location: LastLocationType = useLocation()



    // const ref = useRef()
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     const userId = localStorage.getItem('userId')
    //     if (!ref.current) {
    //         if (token) {
    //             props.onCheckState(token, userId)
    //         } else {
    //             props.onInitActivities()
    //         }
    //     }
    //     ref.current = true
    // }, [props])

  
    let AuthGuard = (
        <Switch>
            <Route
                path='/'
                exact
                component={Home}
                render={Home}
            />
                <Route path='/about' component={About} />
                <Route path='/courses' component={Courses} />
            {/* <Route
                path='/Auth/login'
                render={(props) => <LoginPage {...props} />}
            />
            <Route
                path='/Auth/signup'
                render={(props) => <SignupPage {...props} />}
            />

            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/faq' component={Faq} />
            <Route path='/terms' component={Terms} /> */}
            <Redirect to='/' />
        </Switch>
    )
    // if (props.auth) {
    //     let admintoShow = (
    //         <Route
    //             path='/admin'
    //             render={(props) => <AdminLayout {...props} />}
    //         />
    //     )

    //     if (props.siteOwner) {
    //         admintoShow = (
    //             <Route
    //                 path='/admin'
    //                 render={(props) => <SiteOwnerAdmin {...props} />}
    //             />
    //         )
    //     }

    //     AuthGuard = (
    //         <Switch>
    //             <Route path='/' exact component={Home} />
    //             <Route
    //                 path='/Auth/login'
    //                 render={(props) => <AsyncLogin {...props} />}
    //             />
    //             <Route path='/about-us' component={AsyncAboutUs} />
    //             <Route path='/contact-us' component={ContactUs} />
    //             <Route path='/faq' component={Faq} />
    //             <Route path='/terms' component={Terms} />

    //             {admintoShow}
    //             <Redirect to='/' />
    //         </Switch>
    //     )
    // }

    return (
        <div className='rootApp'>
             <Layout isAdmin={location}>
                {AuthGuard}
            </Layout>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         siteOwner: state.auth.siteOwner,
//         //auth: state.auth.tokenId,
//         auth: 'jnsdkfms'
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onCheckState: (tokenId, userId) =>
//             dispatch(actions.authSuccess(tokenId, userId)),
//         onInitActivities: () => dispatch(actions.initActivities()),
//     }
// }

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default App