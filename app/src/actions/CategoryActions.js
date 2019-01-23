/**
 * This class is used to store the existent actions of our ListCategories component. It is mostly responsible for making
 * requests to our API (currently NASA API, January 2017) and then dispatch the result of the operation to our reducer
 * (ListCategoriesReducer)
 */

import {CATEGORIES_FETCH_EMPTY, CATEGORIES_FETCH_ERROR, CATEGORIES_FETCH_LOADING, CATEGORIES_FETCH_SUCCESS} from "./types";
import DataRepository from "../data/DataRepository";


/**
 * Fetch categories from the API
 * @returns {function(*)} dispatch of the operation
 */
export const fetchData = () => {

    return (dispatch) => {
        // once the method is called (before the async request is executed), we already
        // dispatch our type as loading, so the user can see some progress on the screen
        dispatch({type: CATEGORIES_FETCH_LOADING});

        DataRepository.getCategories()
            .then((categories) => {
                if (categories) {
                    dispatch({type: CATEGORIES_FETCH_SUCCESS, payload: categories});
                } else {
                    dispatch({type: CATEGORIES_FETCH_EMPTY});
                }
            })
            .catch(() => {
                    // this block is called if some exception was thrown during our request
                    dispatch({type: CATEGORIES_FETCH_ERROR});
                }
            );
    }
};