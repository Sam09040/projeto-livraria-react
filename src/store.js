import { legacy_createStore as createStore, combineReducers } from "redux";
const initialState = [];

const cartReducer = (state = initialState, action) => {
    console.log(state);
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id );
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cart: cartReducer
});

const store = createStore(rootReducer);

export default store;
