import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/api'
const token = localStorage.getItem("access_token")

const REGISTER = "REGISTER";
const RESET_REGISTER = "RESET_REGISTER";
const LOGIN = "LOGIN";
const RESET_LOGIN = "RESET_LOGIN";
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
            Swal.fire({
                icon: 'error',
                title: 'Login Failed...',
                text: error.response.data.message,
              })
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

const resetRegister = () => {
    return (dispatch) =>{
        dispatch({
            type: RESET_REGISTER,
            payload: {
                loading: false,
                data: false,
                errorMessage: false,
            }
        })
    }
}

const loginUser = (data) => {
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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login success',
                showConfirmButton: false,
                timer: 1500
              })
            dispatch({
                type: LOGIN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed...',
                text: error.response.data.message,
              })
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

const resetLogin = () => {
    return (dispatch) =>{
        dispatch({
            type: RESET_LOGIN,
            payload: {
                loading: false,
                data: false,
                errorMessage: false,
            }
        })
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
    RESET_REGISTER,
    LOGIN,
    RESET_LOGIN,
    EDIT,
    registerUser,
    resetRegister,
    loginUser,
    resetLogin,
    editUser
}