import TYPES from "../../actionTypes"

const initialState = {
  dialog:{
    title:'标题',
    visible:false,
    placeholder:'请输入您需要的文字'
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.SHOW_DIALOG: {
      const {dialog} = action.payload
      return {
        ...state,
        dialog
      }
    }
    default:
      return state
  }
}
