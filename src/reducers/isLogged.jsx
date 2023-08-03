

const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            // return true;
            return !state;
        default: 
            return state;
    }
}

export default loggedReducer;