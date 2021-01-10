import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../myScreens/MainScreen'
import WaitingScreen from '../myScreens/WaitingScreen'


const AnimStack = createStackNavigator()

const StackNavigation = () =>{
  return (
      <AnimStack.Navigator headerMode={"none"} initialRouteName = {'Home'}>
        <AnimStack.Screen name = "Main" component = {MainScreen}/>
        <AnimStack.Screen name = "Wait" component = {WaitingScreen}/>
      </AnimStack.Navigator>
  );
}

export default StackNavigation;