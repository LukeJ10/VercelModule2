const initialState = {
    conspiracyMode: false,
  };
  
  const rootReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'TOGGLE_CONSPIRACY_MODE':
        return {
          ...state,
          conspiracyMode: !state.conspiracyMode,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  