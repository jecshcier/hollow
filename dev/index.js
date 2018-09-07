import React from 'react'
import ReactDOM from 'react-dom'
// import {Tree, Button, Radio, Icon, Modal, Input} from 'antd';
import AddGroupModal from './react/inputDialog'
import './css/style.css'

class Main extends React.Component {

  constructor(props) {
    super(props);
    let group = new Map()
    let data = ['发生大幅的方', '否', '多福多寿', '的', '测试', '否的撒发生的', '发生的', '发生的', '啊等等等', '发生大幅的身份', '测试', '发生的发生', '收拾收拾', '鳏寡孤独说', '发生大幅撒上发呆', '三大大幅否大幅的的发生', '法定身份的发生大幅的', '发生大幅']
    data.map((val, index) => {
      let h = Math.floor(Math.random() * 360)
      let bgColor = {
        backgroundColor: 'hsl(' + h + ',50%,70%)'
      }
      group.set(val, bgColor)
    })
    this.state = {
      group: group,
      modal: false
    }
  }

  showAddGroupModal = () => {
    this.setState({
      modal: true
    })
  }

  chatting = () => {
    window.location = 'chat.html'
  }

  handleOk = (newGroupName) => {
    let group = this.state.group
    let h = Math.floor(Math.random() * 360)
    let bgColor = {
      backgroundColor: 'hsl(' + h + ',50%,70%)'
    }
    if(group.get(newGroupName)){
      alert("字段重复啦！")
      return false
    }
    group.set(newGroupName,bgColor)
    this.setState({
      group: group,
      modal:false
    })
  }

  render() {
    const groupList = []
    this.state.group.forEach((option, index) => {
      groupList.push(<li className="main-group" key={groupList.length} onClick={this.chatting}
                         style={option}>{index}</li>)
    })

    return [<div key="bg" className="bg"></div>,
      <p key="p1" style={{textAlign: 'center', color: '#fff'}}><span style={{fontSize: '50px'}}>你好，</span><span
        style={{verticalAlign: 'bottom'}}>游客</span></p>, <ul className="main-group-content" key="u1">
        {groupList}
        <li className="main-group" style={{background: '#878787', color: '#fff'}} onClick={this.showAddGroupModal}><i
          className="fa fa-plus"></i></li>
      </ul>, <div key="option" className="index-options"><a href=""><i className="fa fa-refresh" aria-hidden="true"></i>
        &nbsp;换一组</a><a href="">登录</a></div>,
      <AddGroupModal ref="groupModal" onOk={this.handleOk} show={this.state.modal} closeModal={this} modalName="新增分组"
                     placeholder="新分组名称" key="modal"/>
    ]
  }

}


ReactDOM.render(
  <Main/>,
  document.getElementById('main')
)