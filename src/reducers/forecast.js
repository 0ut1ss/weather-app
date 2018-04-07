const forecastReducerDefaultState = {};

export default (state = forecastReducerDefaultState , action) => {
    switch(action.type) {
        case 'SET_COORDS':
            return [
                action.weather
            ];
        default:
            return state;
    }
};