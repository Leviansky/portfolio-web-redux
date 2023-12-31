import axios from "axios";

const URL_USER = 'http://localhost:3000/api/users'
const URL_EDU = 'http://localhost:3000/api/educations'
const URL_EXP = 'http://localhost:3000/api/experiences'
const URL_ORG = 'http://localhost:3000/api/organitations'

const GET_DETAIL_USER = "GET_DETAIL_USER"
const RESET_DETAIL_USER = "RESET_DETAIL_USER"
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
const DETAIL_EDU = "DETAIL_EDU"
const DETAIL_EXP = "DETAIL_EXP"
const DETAIL_ORG = "DETAIL_ORG"
const EDIT_EDU = "EDIT_EDU"
const EDIT_EXP = "EDIT_EXP"
const EDIT_ORG = "EDIT_ORG"
const DELETE_EDU = "DELETE_EDU"
const DELETE_EXP = "DELETE_EXP"
const DELETE_ORG = "DELETE_ORG"

const deleteEducation = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_EDU,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'DELETE',
                url: URL_EDU + '/' + id,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: DELETE_EDU,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: DELETE_EDU,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const deleteExperience = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_EXP,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'DELETE',
                url: URL_EXP + '/' + id,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            dispatch({
                type: DELETE_EXP,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: DELETE_EXP,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const deleteOrganization = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_ORG,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'DELETE',
                url: URL_ORG + '/' + id,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: DELETE_ORG,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: DELETE_ORG,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const editEducation = (id, data) => {
    return async (dispatch) => {
        dispatch({
            type: EDIT_EDU,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'PUT',
                url: URL_EDU + '/' + id,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: EDIT_EDU,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: EDIT_EDU,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const editExperience = (id, data) => {
    return async (dispatch) => {
        dispatch({
            type: EDIT_EXP,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'PUT',
                url: URL_EXP + '/' + id,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: EDIT_EXP,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: EDIT_EXP,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const editOrganization = (id, data) => {
    return async (dispatch) => {
        dispatch({
            type: EDIT_ORG,
            payload: {
                data: false,
                loading: true,
                errorMessage: false,
            }
        })
        try {
            let response = await axios({
                method: 'PUT',
                url: URL_ORG + '/' + id,
                data: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                },
                timeout: 12000
            })
            console.log(response.data);
            dispatch({
                type: EDIT_ORG,
                payload: {
                    data: response.data,
                    loading: false,
                    errorMessage: false,
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: EDIT_ORG,
                payload: {
                    loading: false, 
                    data: false,
                    errorMessage: error,
                }
            })
        }
    }
}

const detailEducation = (data) => {
    return (dispatch) => {
        console.log(data);
        dispatch({
            type: DETAIL_EDU,
            payload: {
                data: data,
            }
        })
    }
}

const detailExperience = (data) => {
    return (dispatch) => {
        console.log(data);
        dispatch({
            type: DETAIL_EXP,
            payload: {
                data: data,
            }
        })
    }
}

const detailOrganization = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_ORG,
            payload: {
                data: data,
            }
        })
    }
}

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

const resetDetailUser = () => {
    return async (dispatch) => {
        dispatch({
            type: RESET_DETAIL_USER,
            payload: {
                data: false
            }
        })
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
    DETAIL_EDU,
    DETAIL_EXP,
    DETAIL_ORG,
    EDIT_EDU,
    EDIT_EXP,
    EDIT_ORG,
    DELETE_EDU,
    DELETE_EXP,
    DELETE_ORG,
    RESET_DETAIL_USER,
    resetDetailUser,
    deleteEducation,
    deleteExperience,
    deleteOrganization,
    editEducation,
    editExperience,
    editOrganization,
    detailEducation,
    detailExperience,
    detailOrganization,
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