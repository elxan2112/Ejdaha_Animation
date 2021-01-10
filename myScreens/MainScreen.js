import React, {Component} from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import {helloFriend, red_play} from '../images'
import styles from '../myStyles/MainScreenStyles'


class MainScreen extends Component{
  constructor(props){
    super(props)
    this.animatedValueLogo = new Animated.Value(0)
    this.animatedValueBtn = new Animated.Value(0)
    
  }
  componentDidMount () {
    this.animate()
  }

  navigator() {
    const { navigate } = this.props.navigation
    navigate('Wait')
}

  animate () {
    Animated.sequence([
        Animated.timing(
            this.animatedValueLogo,
            {
                toValue:1,
                duration:3000,
                easing: Easing.linear,
                useNativeDriver:true
            }
        ),
        Animated.timing(
            this.animatedValueBtn,
            {
                toValue:1,
                duration:2000,
                easing: Easing.linear,
                useNativeDriver:true
            }
        )
    ]).start()
}

  
  render(){

    const logoImages = this.animatedValueLogo.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      })
    const introButton = this.animatedValueBtn.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    return(
      <View style={styles.container}>
        <Animated.Image source={helloFriend} style={{...styles.logoImage, opacity: logoImages}}/>
        <TouchableOpacity 
        onPress={()=> this.navigator()}
        style={styles.searchBtn}>
        <Animated.Image source ={red_play} style ={{...styles.btnImage, opacity: introButton}}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default MainScreen