import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Store from './src/redux/store'
import Todo from './src/screens/auth/todo';
import Login from './src/screens/auth/Login';
import AboutUs from './src/screens/AboutUs';
import HomeScreen from './src/screens/HomeScreen';

import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screens/auth/signin';
import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App ( ) {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Login" component={Login} options={{title: "Login"}}/>
        <Stack.Screen name="Todo" component={Todo} options={{title: "Todo"}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home Screen"}}/>
        <Stack.Screen name="AboutUs" component={AboutUs} options={{title: "About Us"}}/>

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}