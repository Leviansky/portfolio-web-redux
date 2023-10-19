import axios from 'axios'
const URL = 'http://localhost:3000/api'
const token = localStorage.getItem("access_token")
const id = localStorage.getItem("id")

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const EDIT = "EDIT";

const registerUser = (data) => {
    return async (dispatch) => {
        dispatch({
            type: REGISTER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'POST',
                url: URL + '/users/register',
                data: data,
                timeout: 12000
            })
            dispatch({
                type: REGISTER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                }
            })
        } catch (error) {
            dispatch({
                type: REGISTER,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.response.data.message,
                }
            })
        }
    }
}

const loginUser = (data) => {
    console.log('masuk dispatch');
    return async (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'POST',
                url: URL + '/users/login',
                data: data,
                timeout: 12000
            })
            console.log(response);
            dispatch({
                type: LOGIN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.response.data.message,
                }
            })
        }
    }
}

const editUser = (data) => {
    return async (dispatch) => {
        dispatch({
            type: EDIT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'PUT',
                url: URL + '/users/edit',
                data: data,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                timeout: 12000
            })
            dispatch({
                type: EDIT,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                }
            })
        } catch (error) {
            dispatch({
                type: EDIT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.response.data.message,
                }
            })
        }
    }
}


export {
    REGISTER,
    LOGIN,
    EDIT,
    registerUser,
    loginUser,
    editUser
}