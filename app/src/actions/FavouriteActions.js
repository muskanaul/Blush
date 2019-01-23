import {FAVORITE_FETCH_EMPTY, FAVORITE_FETCH_ERROR, FAVORITE_FETCH_LOADING, FAVORITE_FETCH_SUCCESS} from "./types";
import DataRepository from "../data/DataRepository";

export const fetchFavouriteProducts = () => {

    return (dispatch) => {
        // once the method is called (before the async request is executed), we already
        // dispatch our type as loading, so the user can see some progress on the screen
        dispatch({type: FAVORITE_FETCH_LOADING});

        DataRepository.getFavouriteProducts()
            .then((products) => {
                if (products) {
                    dispatch({type: FAVORITE_FETCH_SUCCESS, payload: products});
                } else {
                    dispatch({type: FAVORITE_FETCH_EMPTY});
                }
            })
            .catch(() => {
                    // this block is called if some exception was thrown during our request
                    dispatch({type: FAVORITE_FETCH_ERROR});
                }
            );
    }
};