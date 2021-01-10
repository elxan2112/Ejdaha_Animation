import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation'

class App extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    )
  }
}
export default App;
