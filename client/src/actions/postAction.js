import axios from 'axios';

const URL = 'http://localhost:3000/api/posts'
const token = localStorage.getItem("access_token")

const GET_POSTEDS = "GET_POSTEDS";

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
                    Authorization: `Bearer ${token}`
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


export {
    GET_POSTEDS,
    getPosteds
}