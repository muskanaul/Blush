import React, {Component} from 'react';
import {FlatList, View} from "react-native";
import {connect} from 'react-redux';
import Loading from "./common/Loading";
import {STATE_EMPTY_VIEW, STATE_ERROR, STATE_LOADING, STATE_SUCCESS} from "./states";
import Error from "./common/Error";
import Empty from "./common/Empty";
import {fetchFavouriteProducts} from "./../actions/FavouriteActions";


class Favourite extends Component {

    componentWillMount() {
        console.log("***Favourites selected****")
        console.log(this.props);
        this.props.fetchFavouriteProducts();
    }

    renderItem({item}) {
        return (
            <Text>{item.brandName}</Text>
        );
    }

    renderList() {
        return (
            <FlatList
                data={this.props.products}
                renderItem={(item) => this.renderItem(item)}
                keyExtractor={(item, index) => index}/>
        );
    }

    get renderScreen() {
        switch (this.props.state) {
            case STATE_EMPTY_VIEW:
                return <Empty/>;

            case STATE_ERROR:
                return <Error/>;

            case STATE_LOADING:
                return <Loading/>;

            case STATE_SUCCESS:
                return this.renderList();
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderScreen}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.favoriteProducts.products,
        state: state.favoriteProducts.state
    };

};

export default connect(mapStateToProps, {fetchFavouriteProducts: fetchFavouriteProducts})(Favourite);