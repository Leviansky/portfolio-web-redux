import { REGISTER, LOGIN, EDIT } from "../../actions/userAction";

const initialState = {
    registerUserResult: false,
    registerUserLoading: false,
    registerUserError: false,

    loginUserResult: false,
    loginUserLoading: false,
    loginUserError: false,

    editUserResult: false,
    editUserLoading: false,
    editUserError: false,
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER: 
            return {
                ...state,
                registerUserResult: action.payload.data,
                registerUserLoading: action.payload.loading,
                registerUserError: action.payload.errorMessage
            }
        case LOGIN:
            return {
                ...state,
                loginUserResult: action.payload.data,
                loginUserLoading: action.payload.loading,
                loginUserError: action.payload.errorMessage
            }
        case EDIT:
            return {
                ...state,
                editUserResult: action.payload.data,
                editUserLoading: action.payload.loading,
                editUserError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default UserReducer