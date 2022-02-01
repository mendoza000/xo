import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css'
import 'boxicons'
import 'animate.css'

import { AppRouter } from './componenets/routers/AppRouter'
import { store } from './componenets/store/store'
import './styles/styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
