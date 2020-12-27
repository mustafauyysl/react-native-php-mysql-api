import React, {useState, useEffect} from 'react';
import MainNavigator from './navigation/MainNavigator';
import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import NoInternetScreen from './screens/NoInternetScreen';
import NetInfo from "@react-native-community/netinfo";

const store = configureStore();

const App = () => {
  const [internet, checkInternet] = useState(true)

  useEffect(() => {
    NetInfo.addEventListener(state => {
      checkInternet(state.isConnected)
    });
    SplashScreen.hide()
  })

  const renderNoInternet = () => {
    return (
      <NoInternetScreen />
    )
  }

  const renderContainer = () => {
    return(
      <Provider store={store}>
          <MainNavigator />
      </Provider>
    )
  }

  return (
    internet ? renderContainer() : renderNoInternet()
  )
};



export default App;
