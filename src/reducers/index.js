import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  providers: (state = [], action) => {
    switch (action.type) {
      case 'fetch_providers':
        return action.payload;
      default:
        return state;
    }
  }
});

export default rootReducer;
