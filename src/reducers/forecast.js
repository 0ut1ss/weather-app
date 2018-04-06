const forecastReducerDefaultState = {};

export default (state = forecastReducerDefaultState , action) => {
    switch(action.type) {
        case 'SET_COORDS':
            return [
                ...state,
                action.city
            ];
        default:
            return state;
    }
};