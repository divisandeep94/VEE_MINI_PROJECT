import { INITAL_DATA, USER_LIST_UPDATE } from '../Actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case INITAL_DATA:
      return { ...state, data: action.data }
    case USER_LIST_UPDATE:
      return { ...state, data: action.data }
  }
};

export default reducer;
