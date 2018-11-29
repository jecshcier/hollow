import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import Main from "./components/main/Main"
import store from "./redux/store"

import './css/style.css'

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('main')
)