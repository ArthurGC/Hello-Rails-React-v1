import { createStore } from "redux";

const initialState = {
    greeting: []
}

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'NOTHING':
            break;
    
        default:
            return state;
    }
}

export default configureStore = () => {
    const store = createStore(rootReducer, initialState);
    return store;
}
