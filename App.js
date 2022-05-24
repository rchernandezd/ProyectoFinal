import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux'
import { StyleSheet } from 'react-native';
import { init } from './db';
import store from './store';

init()
  .then(() => console.log("Database initialized."))
  .catch( err => {
    console.log("Database fail connection: " + err.message);
})

export default function App() {

  return (
        //<ShopNavigator/>
    //<NavigationContainer>
    //  <TabNavigator/>
    //</NavigationContainer>
    //<LoginScreen/>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>

  );
}

const styles = StyleSheet.create({});
