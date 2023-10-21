import axios from 'axios';

const URL = 'http://localhost:3000/api/posts'
const token = localStorage.getItem("access_token")

const GET_POSTS = "GET_POSTS";
const GET_POSTEDS = "GET_POSTEDS";
const CHANGE_POST = "CHANGE_POST";
const MODAL_ADD_POST = "MODAL_ADD_POST";
const ADD_POST = "ADD_POST";
const RESET_ADD_POST = "RESET_ADD_POST";
const DETAIL_POST = "DETAIL_POST";
const MODAL_EDIT_POST = "MODAL_EDIT_POST";

const changeStatusModalAddPost = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_ADD_POST,
            payload: {
                data: data
            }
        })
    }
}

const changeStatusModalEditPost = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_EDIT_POST,
            payload: {
                data: data
            }
        })
    }
}

const detailPost = (data) => {
    return async (dispatch) => {
        dispatch({
            type: DETAIL_POST,
            payload: {
                data: data
            }
        })
    }
}

const resetAddPost = () => {
    return (dispatch) =>{
        dispatch({
            type: RESET_ADD_POST,
            payload: {
                loading: false,
                data: false,
                errorMessage: false,
            }
        })
    }
}

const addPost = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_POST,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'POST',
                url: URL,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: ADD_POST,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: ADD_POST,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const getPosts = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_POSTS,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'GET',
                url: URL + '/all',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: GET_POSTS,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: GET_POSTS,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const getPosteds = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_POSTEDS,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'GET',
                url: URL,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            dispatch({
                type: GET_POSTEDS,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: GET_POSTEDS,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const changePost = (id) => {
    return async (dispatch) => {
        dispatch({
            type: CHANGE_POST,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'POST',
                url: URL + '/change/' + id,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            dispatch({
                type: CHANGE_POST,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: CHANGE_POST,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}


export {
    GET_POSTS,
    GET_POSTEDS,
    CHANGE_POST,
    MODAL_ADD_POST,
    ADD_POST,
    RESET_ADD_POST,
    DETAIL_POST,
    MODAL_EDIT_POST,
    changeStatusModalEditPost,
    detailPost,
    resetAddPost,
    addPost,
    changeStatusModalAddPost,
    getPosts,
    getPosteds,
    changePost,
}