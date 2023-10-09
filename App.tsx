import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/home.screen';
import Splash from './src/screens/splash/splash.screen';
import { Provider } from 'react-redux';
import store from './src/store/store';
import CreatePostScreen from './src/screens/createPost/createPost.screen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Create" component={CreatePostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})