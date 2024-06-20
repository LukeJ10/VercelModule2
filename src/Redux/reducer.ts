const initialState = {
    conspiracyMode: false,
  };
  
  const conspiracyModeReducer = (state = false, action: { type: string }) => {
    switch (action.type) {
      case 'TOGGLE_CONSPIRACY_MODE':
        return !state;
      default:
        return state;
    }
  };
  export default conspiracyModeReducer;
  