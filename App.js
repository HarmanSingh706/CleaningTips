import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import HomeScreen from './screens/HomeScreen'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import AddTips from './screens/AddTips'
import GetTips from './screens/GetTips'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {AppTabNavigator} from './components/AppTabNavigator'

export default function App(){
  return(
    <SafeAreaProvider>
     <AppContainer/>
    </SafeAreaProvider>
  )

}


const switchNavigator = createSwitchNavigator({
HomeScreen: { screen: HomeScreen },
AppTabNavigator: { screen: AppTabNavigator }
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});