const initialState = {
  language: 'en'
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'SELECT_CHANGE') {
    return {
      ...state,
      language: action.value
    }
  }

  return newState;
}

export default reducer;