import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from "./../actions/CategoryActions";
import Loading from "./common/Loading";
import {STATE_EMPTY_VIEW, STATE_ERROR, STATE_LOADING, STATE_SUCCESS} from "./states";
import Error from "./common/Error";
import Empty from "./common/Empty";
import {ListView, GridRow, Text, TouchableOpacity, DropDownMenu, Caption, ImageBackground,Icon, 
    Button, Title, Tile, Subtitle, Divider, View, Card, Image, NavigationBar, Screen} from '@shoutem/ui';
import {favorite, fetchProducts, removeFavorite} from "./../actions/ProductsActions";

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedCategory: null
        }
    }
    componentWillMount() {
        console.log(this.props);
        this.props.fetchData();
    }
    onFavoritePress(product) {
        this.props.favorite(product);
    }
    onRefresh() {
        console.log("refresh");
        this.props.fetchData();
    }
    renderRow(rowData, sectionId, index) {
        // rowData contains grouped data for one row,
        // so we need to remap it into cells and pass to GridRow 
        const cellViews = rowData.map((product, id) => {
          return (
            <TouchableOpacity key={id} styleName="flexible">
              <Card styleName="flexible">
                <Image
                  styleName="medium-square"
                  source={{ uri: product.image }}
                />
                <View styleName="content">
                    <Subtitle>{product.brandName}</Subtitle>
                    <Text>{product.productName}</Text>
                </View>
                <View styleName="vertical v-end" >
                <Subtitle style={{color: 'red'}}>{product.salePrice}</Subtitle>
                <View styleName="horizontal v-end space-between">
                    <Caption styleName="line-through">{product.listPrice}</Caption>
                    <Button styleName="tight clear" onPress={() => this.props.favorite(product)}><Icon name="add-to-favorites-off" /></Button>
                </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        });
      
        return (
          <GridRow columns={2}>
            {cellViews}
          </GridRow>
        );
      }
    renderList() {
    const selectedCategory = this.state.selectedCategory || this.props.categories[0];
    const groupedData = GridRow.groupByRows(selectedCategory.products, 2)
    return (
        <View>
        <DropDownMenu
            styleName="horizontal"
            options={this.props.categories}
            selectedOption={selectedCategory ? selectedCategory : this.props.categories[0]}
            onOptionSelected={(category) => this.setState({ selectedCategory: category })}
            titleProperty="categoryName"
            valueProperty="category"
        />
        <Divider styleName="section-header" style={{backgroundColor: 'white'}}>
            <Caption>{selectedCategory.recordCount} PRODUCTS FOUND</Caption>
        </Divider>
        <ListView
            data={groupedData}
            renderRow={this.renderRow}
            onRefresh={() => this.onRefresh()}
        />
        </View>
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
        const { navigate } = this.props.navigation;
        return (
            <Screen styleName="paper">
            <NavigationBar
            styleName="inline"
            hasHistory
            leftComponent={<Icon name="sidebar" />}
            centerComponent={<Title>BLUSH</Title>}
            rightComponent={(
                <Icon name="add-to-favorites-off" />
            )}
            />
            {this.renderScreen}
            </Screen>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.listCategories.categories,
        selectedCategory: state.listCategories.selectedCategory,
        state: state.listCategories.state
    };

};

export default connect(mapStateToProps, {fetchData: fetchData, favorite: favorite})(MainScreen);