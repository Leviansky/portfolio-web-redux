import axios from "axios";

const URL = 'http://localhost:3000/api/users'

const GET_DETAIL_USER = "GET_DETAIL_USER"

const getDetailUser = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_DETAIL_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'GET',
                url: URL,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                timeout: 12000
            })
            dispatch({
                type: GET_DETAIL_USER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                }
            })
        } catch (error) {
            dispatch({
                type: GET_DETAIL_USER,
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
    GET_DETAIL_USER,
    getDetailUser,
}