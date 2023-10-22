import axios from "axios";

const URL_USER = 'http://localhost:3000/api/users'
const URL_EDU = 'http://localhost:3000/api/educations'
const URL_EXP = 'http://localhost:3000/api/experiences'
const URL_ORG = 'http://localhost:3000/api/organitations'

const GET_DETAIL_USER = "GET_DETAIL_USER"
const MODAL_EDIT_USER = "MODAL_EDIT_USER"
const MODAL_ADD_EDU = "MODAL_ADD_EDU"
const MODAL_EDIT_EDU = "MODAL_EDIT_EDU"
const MODAL_ADD_EXP = "MODAL_ADD_EXP"
const MODAL_EDIT_EXP = "MODAL_EDIT_EXP"
const MODAL_ADD_ORG = "MODAL_ADD_ORG"
const MODAL_EDIT_ORG = "MODAL_EDIT_ORG"
const EDIT_USER = "EDIT_USER"
const ADD_EDU = "ADD_EDU"
const ADD_EXP = "ADD_EXP"
const ADD_ORG = "ADD_ORG"

const addOrganization = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_ORG,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'POST',
                url: URL_ORG,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: ADD_ORG,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: ADD_ORG,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const addExperience = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_EXP,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'POST',
                url: URL_EXP,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: ADD_EXP,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: ADD_EXP,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const addEducation = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_EDU,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'POST',
                url: URL_EDU,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: ADD_EDU,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: ADD_EDU,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const editUser = (data) => {
    return async (dispatch) => {
        dispatch({
            type: EDIT_USER,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'PUT',
                url: URL_USER + '/edit',
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: EDIT_USER,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: EDIT_USER,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const changeStatusModalEditUser = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_EDIT_USER,
            payload: {
                data: data
            }
        })
        console.log(`masuk dispatch status modal ${data}`);
    }
}

const changeStatusModalAddEdu = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_ADD_EDU,
            payload: {
                data: data
            }
        })
        console.log(`masuk dispatch status modal ${data}`);
    }
}

const changeStatusModalEditEdu = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_EDIT_EDU,
            payload: {
                data: data
            }
        })
        console.log(`masuk dispatch status modal ${data}`);
    }
}

const changeStatusModalAddExp = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_ADD_EXP,
            payload: {
                data: data
            }
        })
        console.log(`masuk dispatch status modal ${data}`);
    }
}

const changeStatusModalEditExp = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_EDIT_EXP,
            payload: {
                data: data
            }
        })
        console.log(`masuk dispatch status modal ${data}`);
    }
}

const changeStatusModalAddOrg = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_ADD_ORG,
            payload: {
                data: data
            }
        })
        console.log(`masuk dispatch status modal ${data}`);
    }
}

const changeStatusModalEditOrg = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MODAL_EDIT_ORG,
            payload: {
                data: data
            }
        })
        console.log(`masuk dispatch status modal ${data}`);
    }
}

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
                url: URL_USER,
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
    MODAL_EDIT_USER,
    MODAL_ADD_EDU,
    MODAL_EDIT_EDU,
    MODAL_ADD_EXP,
    MODAL_EDIT_EXP,
    MODAL_ADD_ORG,
    MODAL_EDIT_ORG,
    EDIT_USER,
    ADD_EDU,
    ADD_EXP,
    ADD_ORG,
    addOrganization,
    addExperience,
    addEducation,
    editUser,
    changeStatusModalEditOrg,
    changeStatusModalAddOrg,
    changeStatusModalEditExp,
    changeStatusModalAddExp,
    changeStatusModalEditEdu,
    changeStatusModalAddEdu,
    changeStatusModalEditUser,
    getDetailUser,
}