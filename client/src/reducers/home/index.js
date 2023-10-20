import { TAB } from "../../actions/homeAction";

const initialState = {
    activeTab: 'Home',
}

const HomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case TAB: 
            return {
                ...state,
                activeTab: action.payload.data,
            }
        default:
            return state;
    }
}

export default HomeReducer