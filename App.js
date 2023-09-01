import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AboutUs from './src/screens/AboutUs';
import HomeScreen from './src/screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from './src/screens/auth/signin';
import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home Screen"}}/>
        <Stack.Screen name="AboutUs" component={AboutUs} options={{title: "About Us"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;