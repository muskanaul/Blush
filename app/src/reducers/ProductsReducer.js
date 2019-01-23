import {PRODUCTS_FAVORITE, PRODUCTS_FETCH_SUCCESS, PRODUCTS_REMOVE_FAVORITE} from "../actions/types";

const INITIAL_STATE = {
    products: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCTS_FETCH_SUCCESS:
            return {
                ...state,
                products: action.payload
            };
        case PRODUCTS_FAVORITE:
            return {
                ...state
            };
        case PRODUCTS_REMOVE_FAVORITE:
            return {...state};
        default:
            return state;
    }
}