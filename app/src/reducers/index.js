import {combineReducers} from 'redux';
import CategoriesReducer from "./CategoriesReducer";
import FavoriteReducer from "./FavoriteReducer";
import ProductsReducer from "./ProductsReducer";

export default combineReducers({
    listCategories: CategoriesReducer,
    favoriteProducts: FavoriteReducer,
    listProducts: ProductsReducer
});