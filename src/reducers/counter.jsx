

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // return state + 1;
            return state + action.payload; // increase by 5
        case 'DECREMENT':
            // return state - 1;
            return state - action.payload; // decrease by 5
        default:
            return state;
    }
};

export default counterReducer;