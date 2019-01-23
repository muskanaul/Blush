import {CATEGORIES_FETCH_EMPTY, CATEGORIES_FETCH_ERROR, CATEGORIES_FETCH_LOADING, CATEGORIES_FETCH_SUCCESS} from "../actions/types";
import {STATE_EMPTY_VIEW, STATE_ERROR, STATE_LOADING, STATE_SUCCESS} from "../components/states";

const INITIAL_STATE = {
    categories: null,
    selectedCategory: null,
    state: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CATEGORIES_FETCH_LOADING:
            return {
                ...state,
                state: STATE_LOADING
            };

        case CATEGORIES_FETCH_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                selectedCategory: action.payload[0],
                state: STATE_SUCCESS
            };

        case CATEGORIES_FETCH_ERROR:
            return {
                ...state,
                ...INITIAL_STATE,
                state: STATE_ERROR
            };

        case CATEGORIES_FETCH_EMPTY:
            return {
                ...state,
                state: STATE_EMPTY_VIEW
            };
        default:
            return state;
    }
}