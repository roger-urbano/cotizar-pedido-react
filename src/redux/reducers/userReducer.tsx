import { 
    USER_DETAIL_SUCCESS,
    USER_LOADING,
    UserType,
    UserDispatchTypes
} from '../actions/user/userActionType';

interface IDefaultState {
  loading: boolean,
  user?: UserType,
  // listUsers?: UserType[]
}

const initialState: IDefaultState =  {
  loading: false,
}
  
  export const userReducer = (state: IDefaultState = initialState, action: UserDispatchTypes): IDefaultState => {
    switch (action.type) {
      case USER_DETAIL_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false
        }; 

      case USER_LOADING: 
        return {
          ...state,
          loading: true,
        }
      default:
        return state;
    }
  };
  
  export default userReducer;
  