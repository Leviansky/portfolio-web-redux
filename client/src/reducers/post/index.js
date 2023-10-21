import { GET_POSTEDS, GET_POSTS, CHANGE_POST } from "../../actions/postAction"

const initialState = {
    getPostsResult: false,
    getPostsLoading: false,
    getPostsError: false,

    getPostedResult: false,
    getPostedLoading: false,
    getPostedError: false,

    changePostResult: false,
    changePostLoading: false,
    changePostError: false,
}

const PostReducer = (state = initialState, action) => {
    console.log("Masuk reducer");
    switch(action.type) {
        case GET_POSTS: 
            return {
                ...state,
                getPostsResult: action.payload.data,
                getPostsLoading: action.payload.loading,
                getPostsError: action.payload.errorMessage
            }
        case GET_POSTEDS: 
            return {
                ...state,
                getPostedResult: action.payload.data,
                getPostedLoading: action.payload.loading,
                getPostedError: action.payload.errorMessage
            }
        case CHANGE_POST: 
            return {
                ...state,
                changePostResult: action.payload.data,
                changePostLoading: action.payload.loading,
                changePostError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default PostReducer