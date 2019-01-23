import {STATE_EMPTY_VIEW, STATE_ERROR, STATE_LOADING, STATE_SUCCESS} from "../components/states";
import {
    FAVORITE_FETCH_EMPTY,
    FAVORITE_FETCH_ERROR,
    FAVORITE_FETCH_LOADING,
    FAVORITE_FETCH_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    products: null,
    state: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FAVORITE_FETCH_LOADING:
            return {
                ...state,
                state: STATE_LOADING
            };

        case FAVORITE_FETCH_SUCCESS:
            return {
                ...state,
                products: action.payload,
                state: STATE_SUCCESS
            };

        case FAVORITE_FETCH_ERROR:
            return {
                ...state,
                ...INITIAL_STATE,
                state: STATE_ERROR
            };

        case FAVORITE_FETCH_EMPTY:
            return {
                ...state,
                state: STATE_EMPTY_VIEW
            };
        default:
            return state;
    }
}