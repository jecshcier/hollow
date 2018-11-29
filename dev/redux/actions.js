import TYPES from "./actionTypes"

export const showDialog = (payload) => ({
  type: TYPES.SHOW_DIALOG,
  payload: {
    dialog: {
      title: payload.title,
      visible: payload.visible,
      placeholder: payload.placeholder
    }
  }
})

export const addGroup = (group) => ({
  type: TYPES.ADD_GROUP,
  payload: group
})

export const loadGroups = (groupList) => ({
  type: TYPES.LOAD_GROUPS,
  payload: {
    groupList
  }
})