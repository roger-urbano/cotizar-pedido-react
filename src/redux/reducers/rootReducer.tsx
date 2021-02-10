import { combineReducers } from "redux"
import userReducer from './userReducer';


const rootReducer = combineReducers({
  userReducer: userReducer
  })
  
  
  // export type RootState = ReturnType<typeof rootReducer>
  export default rootReducer