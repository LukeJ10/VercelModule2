import { createStore } from 'redux';
import rootReducer from './reducer';


export interface RootState {
    conspiracyMode: boolean;
    // Add other state properties here
  }
  
export const initialState = {
    conspiracyMode: false,
  };


const store = createStore(rootReducer);

export default store;
