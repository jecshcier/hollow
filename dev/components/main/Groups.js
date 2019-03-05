import React from "react"
import {Input, Modal} from "antd"
import 'antd/lib/Modal/style/css'
import 'antd/lib/Input/style/css'
import connect from "react-redux/es/connect/connect"
import {showDialog} from "../../redux/actions"

const GroupList = ({groups, showDialog}) => {
  const groupList = groups.groupList
  let groupDom = []
  if (groupList.length) {
    groupDom = groupList.map((el, index) => {
      let bgColor = {
        backgroundColor: 'hsl(' + el.color + ',50%,70%)'
      }
      return <li className="main-group" key={el.id} style={bgColor} onClick={() => {
        window.location = 'chat.html'
      }}>{el.groupName}</li>
    })
  }
  return ([<div key="bg" className="bg"></div>,
    <p key="p1" style={{textAlign: 'center', color: '#fff'}}>
      <span style={{fontSize: '50px'}}>你好，</span>
      <span style={{verticalAlign: 'bottom'}}>游客</span>
    </p>,
    <ul className="main-group-content" key="u1">
      {groupDom}
      <li className="main-group" style={{background: '#878787', color: '#fff'}} onClick={() => {
        showDialog({
          title: '新增分组',
          visible: true,
          placeholder: '新分组名称'
        })
      }}><i className="fa fa-plus"></i>
      </li>
    </ul>,
    <div key="option" className="index-options">
      <a href="">
        <i className="fa fa-refresh" aria-hidden="true"></i>
        &nbsp;换一组</a>
      <a href="">登录</a>
    </div>])
}

export default connect((state) => {
  console.log(state)
  let {groups} = state
  return {groups}
}, {showDialog})(GroupList)