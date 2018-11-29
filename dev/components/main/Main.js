import React from 'react'
// import {Tree, Button, Radio, Icon, Modal, Input} from 'antd';
import AddGroupModal from './InputDialog'
import Groups from './Groups'
import {loadGroups,addGroup,showDialog} from "../../redux/actions"
import {connect} from "react-redux"

import '../../css/style.css'

class Main extends React.Component {

  constructor(props) {
    super(props)
  }

  handleOk = (newGroupName) => {
    this.props.addGroup({
      id:Math.random() * 9999999999 + 1000000000,
      groupName:newGroupName,
      color:Math.floor(Math.random() * 360)
    })
    this.props.showDialog({
      show:false
    })
  }
  componentDidMount(){
    let groups = [{
      id: 1,
      groupName: '维他柠檬茶'
    }, {
      id: 2,
      groupName: '软件开发'
    }, {
      id: 3,
      groupName: '测试'
    }, {
      id: 4,
      groupName: '对酒当歌，人生几何'
    }, {
      id: 5,
      groupName: '春眠不觉晓'
    }, {
      id: 6,
      groupName: '梨花带'
    }, {
      id: 7,
      groupName: '抽纸'
    }, {
      id: 8,
      groupName: '闻说双溪春尚好'
    }, {
      id: 9,
      groupName: '夜不明兮梦不休'
    }, {
      id: 10,
      groupName: '原木纯品'
    }, {
      id: 11,
      groupName: '自古逢秋悲寂寥'
    }, {
      id: 12,
      groupName: '下雪啦'
    }, {
      id: 13,
      groupName: '明明就'
    }, {
      id: 14,
      groupName: '小苹果'
    }, {
      id: 15,
      groupName: 'JavaScript'
    }, {
      id: 16,
      groupName: 'JAVA高阶'
    }, {
      id: 17,
      groupName: '研发中心'
    }, {
      id: 18,
      groupName: '茶杯'
    }, {
      id: 19,
      groupName: '一分钟'
    }, {
      id: 20,
      groupName: '手镯'
    }]
    groups = groups.map((el,index)=>{
      el.color = Math.floor(Math.random() * 360)
      return el
    })
    console.log(groups)
    this.props.loadGroups(groups)
  }

  render() {
    return [
      <Groups key="group"/>,
      <AddGroupModal key="modal" ref="groupModal" onOk={this.handleOk}/>
    ]
  }

}

export default connect(
  (state) => {
    console.log(state)
    return state
  },
  {loadGroups,addGroup,showDialog}
)(Main)