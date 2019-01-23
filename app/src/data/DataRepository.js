import React from 'react';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

import {API_URL} from "../config/api";

var DataRepository = {
    getCategories: function () {
        return new Promise((resolve, reject) => {
            axios.get(API_URL)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    getCategory: function (categoryName) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(categoryName)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    },
    getFavouriteProducts: function () {
        return new Promise((resolve, reject) => {
            AsyncStorage.getAllKeys()
                .then(keys => {
                    Promise.all(keys.map((key) => {
                            return AsyncStorage.getItem(key)
                                .then(res => JSON.parse(res));
                        })
                    )
                        .then(data => resolve(data))
                        .catch(error => reject(error));
                })
                .catch(error => reject(error));
        });
    },
    favoriteProduct: function (product) {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(product.productId, JSON.stringify(product))
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    },
    removeFromFavorites: function (product) {
        return new Promise((resolve, reject) => {
            AsyncStorage.removeItem(product.productId)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        })
    }
};

export default DataRepository;