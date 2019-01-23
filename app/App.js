import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import MainScreen from "./src/components/MainScreen";
import Empty from './src/components/common/Empty'
import RootNavigator from "./src/navigation/RootNavigator";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = { isReady: false };

  _loadAssetsAsync = async () => {
    const imagesAsync = Asset.loadAsync([
      require('./assets/images/error.png'),
      require('./assets/images/loading-animation.gif'),
      require('./assets/images/loading-image.png'),
      require('./assets/images/empty.png')
    ]);

    const fontsAsync = Font.loadAsync({
      // Space Mono Font
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      // Rubik Font
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      // Rubicon Icon Font
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf')
    });

    return Promise.all([imagesAsync, fontsAsync]);
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
