/**
 * This file is used to store the existent actions on our application
 */

/** Pictures section **/

// When the fetch was done successfully
export const CATEGORIES_FETCH_SUCCESS = 'categories_fetch_success';

// When some error happened
export const CATEGORIES_FETCH_ERROR = 'categories_fetch_error';

// When there is nothing to show
export const CATEGORIES_FETCH_EMPTY = 'categories_fetch_empty';

// When we are in the middle of some operation
export const CATEGORIES_FETCH_LOADING = 'categories_fetch_loading';


/** Favorite section **/

// When favorite list fetch is done successfully
export const FAVORITE_FETCH_SUCCESS = 'favorite_fetch_success';

// When some error happened
export const FAVORITE_FETCH_ERROR = 'favorite_fetch_error';

// When there is nothing to show
export const FAVORITE_FETCH_EMPTY = 'favorite_fetch_empty';

// When we are in the middle of some operation
export const FAVORITE_FETCH_LOADING = 'favorite_fetch_loading';


/** Picture detail section **/

// When products is successfully fetched
export const PRODUCTS_FETCH_SUCCESS = 'products_fetch_success';

// When products is added to favorites
export const PRODUCTS_FAVORITE = 'products_favorite';

// When products is removed from favorites
export const PRODUCTS_REMOVE_FAVORITE = 'products_remove_favorite';