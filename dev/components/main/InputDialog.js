import React from "react"
import {Input, Modal} from "antd"
import 'antd/lib/Modal/style/css'
import 'antd/lib/Input/style/css'
import connect from "react-redux/es/connect/connect"
import {showDialog} from "../../redux/actions"


class InputDialogModal extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
    this.state = {
      value: ''
    }
  }

  componentDidUpdate() {
    let _this = this
    window.requestAnimationFrame(function () {
      if (_this.props.inputDialog.dialog.visible) {
        _this.textInput.current.input.focus()
      }
    })
  }

  modalHandleOk = () => {
    this.setState({
      value: ''
    })
    this.props.onOk(this.state.value)
  }

  modalHandleCancel = () => {
    this.setState({
      value: ''
    })
    this.props.showDialog({
      show:false
    })
  }

  changeInputValue = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    {console.log(this.props)}
    return <Modal
      title={this.props.inputDialog.dialog.title}
      visible={this.props.inputDialog.dialog.visible}
      onOk={this.modalHandleOk}
      onCancel={this.modalHandleCancel}
    >
      <Input ref={this.textInput} type="text" onChange={this.changeInputValue} value={this.state.value}
             placeholder={this.props.inputDialog.dialog.placeholder}/>
    </Modal>
  }
}

export default connect((state) => {
  console.log(state)
  return state
},{showDialog})(InputDialogModal)