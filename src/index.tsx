import React from 'react'
import './sass/main.scss'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { reducers } from './store/reducers/reducer'
import Layout from './Containers/Layout'

const store = createStore(reducers, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <Layout/>
    </Provider>
)

ReactDom.render(app, document.querySelector('#root'))