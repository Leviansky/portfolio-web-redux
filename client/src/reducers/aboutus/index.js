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
    DETAIL_EDU,
    DETAIL_EXP,
    DETAIL_ORG,
    EDIT_EDU,
    EDIT_EXP,
    EDIT_ORG,
    DELETE_EDU,
    DELETE_EXP,
    DELETE_ORG,
 } from "../../actions/aboutusAction"

const initialState = {
    detailUserResult: false,
    detailUserLoading: false,
    detailUserError: false,

    detailEducationResult: false,
    detailExperienceResult: false,
    detailOrganizationResult: false,

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

    editEducationResult: false,
    editEducationLoading: false,
    editEducationError: false,

    editExperienceResult: false,
    editExperienceLoading: false,
    editExperienceError: false,

    editOrganizationResult: false,
    editOrganizationLoading: false,
    editOrganizationError: false,

    deleteEducationResult: false,
    deleteEducationLoading: false,
    deleteEducationError: false,

    deleteExperienceResult: false,
    deleteExperienceLoading: false,
    deleteExperienceError: false,

    deleteOrganizationResult: false,
    deleteOrganizationLoading: false,
    deleteOrganizationError: false,

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
        case DELETE_EDU:
            return {
                ...state,
                deleteEducationResult: action.payload.data,
                deleteEducationLoading: action.payload.loading,
                deleteEducationError: action.payload.error,
            }
        case DELETE_EXP:
            return {
                ...state,
                deleteExperienceResult: action.payload.data,
                deleteExperienceLoading: action.payload.loading,
                deleteEducationError: action.payload.error,
            }
        case DELETE_ORG:
            return {
                ...state,
                deleteOrganizationResult: action.payload.data,
                deleteOrganizationLoading: action.payload.loading,
                deleteOrganizationError: action.payload.error,
            }
        case DETAIL_EDU:
            return {
                ...state,
                detailEducationResult: action.payload.data
            }
        case DETAIL_EXP:
            return {
                ...state,
                detailExperienceResult: action.payload.data
            }
        case DETAIL_ORG:
            return {
                ...state,
                detailOrganizationResult: action.payload.data
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
        case EDIT_EDU:
            return {
                ...state,
                editEducationResult: action.payload.data,
                editEducationLoading: action.payload.loading,
                editEducationError: action.payload.error,
            }
        case EDIT_EXP:
            return {
                ...state,
                editExperienceResult: action.payload.data,
                editExperienceLoading: action.payload.loading,
                editExperienceError: action.payload.error,
            }
        case EDIT_ORG:
            return {
                ...state,
                editOrganizationResult: action.payload.data,
                editOrganizationLoading: action.payload.loading,
                editOrganizationError: action.payload.error,
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