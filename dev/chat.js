import React from 'react'
import ReactDOM from 'react-dom'
import {Tree, Button, Radio, Icon, Modal, Input} from 'antd';
import './css/chat.css'
import store from "./redux/store"
import Provider from "react-redux/es/components/Provider"
import Chat from "./components/chat/chat"

ReactDOM.render(
  <Provider store={store}>
    <Chat/>
  </Provider>,
  document.getElementById('main')
)