const TAB = "TAB";

const setActiveTab = (tab) => {
    return async (dispatch) => {
        dispatch({
            type: TAB,
            payload: {
                data: tab,
            }
        })
    }
}


export {
    TAB,
    setActiveTab
}