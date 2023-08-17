import { StyleSheet, Text, View } from 'react-native';
import Index from './src/home/index';
import SignIn from './src/screens/auth/signin';

import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
