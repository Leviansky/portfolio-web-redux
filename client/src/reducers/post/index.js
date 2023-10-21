import { GET_POSTEDS } from "../../actions/postAction"

const initialState = {
    getPostedResult: false,
    getPostedLoading: false,
    getPostedError: false,
}

const PostReducer = (state = initialState, action) => {
    console.log("Masuk reducer");
    switch(action.type) {
        case GET_POSTEDS: 
            return {
                ...state,
                getPostedResult: action.payload.data,
                getPostedLoading: action.payload.loading,
                getPostedError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default PostReducer