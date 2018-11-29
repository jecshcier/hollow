import TYPES from "../../actionTypes"

const initialState = {
  groupList:[]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_GROUP: {
      const group = action.payload
      return {
        ...state,
        groupList:[...state.groupList,group]
      }
    }
    case TYPES.LOAD_GROUPS:{
      const {groupList} = action.payload
      return {
        ...state,
        groupList
      }
    }
    default:
      return state
  }
}
