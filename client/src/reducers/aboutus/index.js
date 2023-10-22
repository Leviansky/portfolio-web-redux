import { 
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
 } from "../../actions/aboutusAction"

const initialState = {
    detailUserResult: false,
    detailUserLoading: false,
    detailUserError: false,

    editUserResult: false,
    editUserLoading: false,
    editUserError: false,

    addEducationResult: false,
    addEducationLoading: false,
    addEducationError: false,

    addExperienceResult: false,
    addExperienceLoading: false,
    addExperienceError: false,

    addOrganizationResult: false,
    addOrganizationLoading: false,
    addOrganizationRError: false,

    isOpenModalEditUser: false,
    
    isOpenModalAddEducation: false,
    isOpenModalEditEducation: false,

    isOpenModalAddExperience: false,
    isOpenModalEditExperience: false,

    isOpenModalAddOrganization: false,
    isOpenModalEditOrganization: false,
}

const AboutusReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DETAIL_USER:
            return {
                ...state,
                detailUserResult: action.payload.data,
                detailUserLoading: action.payload.loading,
                detailUserError: action.payload.error,
            }
        case ADD_ORG:
            return {
                ...state,
                addOrganizationResult: action.payload.data,
                addOrganizationLoading: action.payload.loading,
                addOrganizationError: action.payload.error,
            }
        case ADD_EDU:
            return {
                ...state,
                addEducationResult: action.payload.data,
                addEducationLoading: action.payload.loading,
                addEducationError: action.payload.error,
            }
        case ADD_EXP:
            return {
                ...state,
                addExperienceResult: action.payload.data,
                addExperienceLoading: action.payload.loading,
                addExperienceError: action.payload.error,
            }
        case EDIT_USER:
            return {
                ...state,
                editUserResult: action.payload.data,
                editUserLoading: action.payload.loading,
                editUserError: action.payload.error,
            }
        case MODAL_EDIT_USER:
            return {
                ...state,
                isOpenModalEditUser: action.payload.data
            }
        case MODAL_ADD_EDU:
            return {
                ...state,
                isOpenModalAddEducation: action.payload.data
            }
        case MODAL_EDIT_EDU:
            return {
                ...state,
                isOpenModalEditEducation: action.payload.data
            }
        case MODAL_ADD_EXP:
            return {
                ...state,
                isOpenModalAddExperience: action.payload.data
            }
        case MODAL_EDIT_EXP:
            return {
                ...state,
                isOpenModalEditExperience: action.payload.data
            }
        case MODAL_ADD_ORG:
            return {
                ...state,
                isOpenModalAddOrganization: action.payload.data
            }
        case MODAL_EDIT_ORG:
            return {
                ...state,
                isOpenModalEditOrganization: action.payload.data
            }
        default:
            return state;
    }
}

export default AboutusReducer