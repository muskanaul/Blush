import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {favorite, fetchProducts, removeFavorite} from "../../actions/ProductsActions";
import styles from "./style/index.style";

class PictureDetail extends Component {

    componentWillMount() {
        this.props.fetchProducts(this.props.product.productId);
    }

    onFavoritePress() {
        this.props.favoritePicture(this.props.product);
        this.props.fetchProducts(this.props.product.productId);
    }

    onRemoveFavoritePress() {
        this.props.removeFavorite(this.props.product);
        this.props.fetchProducts(this.props.product.productId);
    }

    get renderFavorite() {
        if (this.props.picture) {
            return (
                <Text onPress={this.onRemoveFavoritePress.bind(this)}>Remove from favorites</Text>
            );
        } else {
            return (
                <Text onPress={this.onFavoritePress.bind(this)}>Favorite me!</Text>
            );
        }
    }

    render() {

        const {title, url, explanation} = this.props;

        return (
                <View style={styles.loremBody}>

                    <Text style={styles.headerText}>
                        {title}
                    </Text>

                    {this.renderFavorite}

                    <Text style={styles.loremText}>
                        {explanation}
                    </Text>

                    <TouchableOpacity onPress={() => {
                        this._scrollView.scrollTo(0, 0);
                    }}>

                    </TouchableOpacity>
                </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        picture: state.Products.picture
    };
};

export default connect(mapStateToProps,
    {
        fetchProducts: fetchProducts,
        favoritePicture: favorite,
        removeFavorite: removeFavorite
    })
(PictureDetail);