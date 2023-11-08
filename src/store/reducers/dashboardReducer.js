const initialState = {
    showBalance: true
};

const dashboardReducer = (state = initialState, actions) => {
    if (actions.type === 'SWITCHING') {
        return {
            ...state,
            showBalance: !state.showBalance
        }
    }

    return state;
}

export default dashboardReducer;