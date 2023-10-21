import { 
    GET_POSTEDS, 
    GET_POSTS, 
    CHANGE_POST, 
    MODAL_ADD_POST, 
    ADD_POST, 
    RESET_ADD_POST, 
    DETAIL_POST, 
    MODAL_EDIT_POST,
    EDIT_POST
} from "../../actions/postAction"

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

    addPostResult: false,
    addPostLoading: false,
    addPostError: false,

    editPostResult: false,
    editPostLoading: false,
    editPostError: false,

    isOpenModalAddPost: false,
    isOpenModalEditPost: false,

    detailPostResult: false,
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
        case MODAL_ADD_POST:
            return {
                ...state,
                isOpenModalAddPost: action.payload.data
            }
        case MODAL_EDIT_POST:
            return {
                ...state,
                isOpenModalEditPost: action.payload.data
            }
        case ADD_POST: 
            return {
                ...state,
                addPostResult: action.payload.data,
                addPostLoading: action.payload.loading,
                addPostError: action.payload.errorMessage
            }
        case EDIT_POST: 
            return {
                ...state,
                editPostResult: action.payload.data,
                editPostLoading: action.payload.loading,
                editPostError: action.payload.errorMessage
            }
        case RESET_ADD_POST: 
            return {
                ...state,
                addPostResult: false,
                addPostLoading: false,
                addPostError: false,
            }
        case DETAIL_POST:
            return {
                ...state,
                detailPostResult: action.payload.data
            }
        default:
            return state;
    }
}

export default PostReducer