const initialState = {
  language: 'en',
  locationData: '',
  weatherData: '',
  firstLocationTimezone: ''
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'SELECT_CHANGE') {
    return {
      ...state,
      language: action.value
    }
  }

  if(action.type === 'UPDATE_LOCATION_DATA') {
    return {
      ...state,
      locationData: action.value
    }
  }

  if(action.type === 'UPDATE_WEATHER_DATA') {
    return {
      ...state,
      weatherData: action.value
    }
  }

  if(action.type === 'UPDATE_FIRST_LOCATION_TIMEZONE') {
    return {
      ...state,
      firstLocationTimezone: action.value
    }
  }

  if(action.type === 'UPDATE_LOCATION_NAME') {
    return {
      ...state,
      locationData: {
        ...state.locationData,
        name: action.value
      }
    }
  }

  return newState;
}

export default reducer;