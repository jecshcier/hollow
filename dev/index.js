import React from 'react'
import ReactDOM from 'react-dom'
import {Tree, Button, Radio, Icon, Modal, Input} from 'antd';
import './css/style.css'



const TreeNode = Tree.TreeNode;

const group = ['发生大幅的方式', '否', '多福多寿', '的', '测试', '否的撒发生的', '发生的', '发生的', '啊等等等', '发生大幅的身份', '测试', '发生的发生', '收拾收拾', '鳏寡孤独说', '发生大幅撒上发呆', '三大大幅否大幅的的发生', '法定身份的发生大幅的', '发生大幅']


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this)
  }
  
  update(state) {
  
  }
  
  render() {
    return [<div key="top"><a href="">登录</a></div>,<p key="p1" style={{textAlign:'center',color:'#fff'}}><span style={{fontSize:'50px'}}>你好，</span><span>游客</span></p>,<ul className="main-group-content" key="u1">
      {
        group.map((option, index) => {
          let h = Math.floor(Math.random() * 360)
          let bgColor = {
            backgroundColor:'hsl(' + h + ',50%,70%)'
          }
          return (<li className="main-group" key={index} style={bgColor} >{option}</li>)
        })
      }
      <li className="main-group" style={{background: '#878787',color: '#fff'}}><i className="fa fa-plus"></i></li>
    </ul>]
  }
  
}


ReactDOM.render(
  <Main/>,
  document.getElementById('main')
)