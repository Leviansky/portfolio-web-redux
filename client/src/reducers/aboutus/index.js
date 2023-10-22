import { GET_DETAIL_USER } from "../../actions/aboutusAction"

const initialState = {
    detailUserResult: false,
    detailUserLoading: false,
    detailUserError: false,
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
        default:
            return state;
    }
}

export default AboutusReducer