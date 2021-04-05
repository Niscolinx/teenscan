import React from 'react'
import './sass/main.scss'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { reducers } from './store/reducers/reducer'
import App from './Containers/App'
import { LastLocationProvider } from 'react-router-last-location'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducers, applyMiddleware(thunk))

const app = (
    
    <Provider store={store}>
        <BrowserRouter>
        <LastLocationProvider>
             <App/>
        </LastLocationProvider>
        </BrowserRouter>
    </Provider>
)

ReactDom.render(app, document.querySelector('#root'))