import DataRepository from "../data/DataRepository";
import {PRODUCTS_FAVORITE, PRODUCTS_FETCH_SUCCESS, PRODUCTS_REMOVE_FAVORITE} from "./types";

export const fetchProducts = (categoryName) => {
    return (dispatch) => {
        DataRepository.getCategory(categoryName)
            .then(result => {
                dispatch({type: PRODUCTS_FETCH_SUCCESS, payload: result});
            })
            .catch(error => {
                console.log('fetchProductserror: ', error);
            });
    }
};

export const favorite = (product) => {
    return (dispatch) => {
        DataRepository.favoriteProduct(product)
            .then(() => {
                dispatch({type: PRODUCTS_FAVORITE});
            })
            .catch(error => console.log('error: ', error));
    }
};

export const removeFavorite = (product) => {
    return (dispatch) => {
        DataRepositoryRepository.removeFromFavorites(product)
            .then(() => {
                dispatch({type: PRODUCTS_REMOVE_FAVORITE});
            })
            .catch(error => {
            });
    }
};