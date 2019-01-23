import { createStackNavigator } from "react-navigation";
import MainScreen from "./../components/MainScreen";
import FavouriteScreen from "./../components/Favourites"
const RootNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Favourite: FavouriteScreen
    },
    {
        navigationOptions: {
            header: null // Will hide header for all screens of current stack navigator,
        },
        initialRouteName: "Main"
    }
);

export default RootNavigator;