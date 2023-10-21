import axios from 'axios';

const URL = 'http://localhost:3000/api/posts'
const token = localStorage.getItem("access_token")

const GET_POSTS = "GET_POSTS";
const GET_POSTEDS = "GET_POSTEDS";
const CHANGE_POST = "CHANGE_POST";

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
    getPosts,
    getPosteds,
    changePost,
}