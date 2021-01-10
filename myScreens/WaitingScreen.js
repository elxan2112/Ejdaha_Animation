import React, {Component} from 'react'
import { ImageBackground, View, Animated, Text } from 'react-native'
import {cosmos, mars} from '../images'
import styles from '../myStyles/WaitingScreenStyles'

const array = [];
for (let i=0; i<5; i++){
    array.push(i)
}


class WaitingScreen extends Component{
    constructor(props){
        super(props)
        this.animatedValue=[]
        array.forEach((value)=>{this.animatedValue[value]=new Animated.Value(0)})
    }

    componentDidMount(){
        this.animation()
    }

    animation(){
        array.forEach((value)=>{this.animatedValue[value].setValue(0)})
        const planArray = array.map((item)=>{
            return Animated.timing(
                this.animatedValue[item],
                {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true
                }
            )
        })
        console.log(planArray)
        Animated.sequence(planArray).start(()=>this.animation())
    }


    render(){
        const marsArray = array.map((item, index) => {
            return(
                <Animated.Image key={index} source={mars} 
                style={{...styles.loadingArr, opacity: this.animatedValue[item]}}/>
            )
        })

        return(
            <ImageBackground source={cosmos} style={styles.backImage}>
                <View style={styles.loadingTextView}>
                    <Text style={styles.loadingText}>
                        Waiting!
                    </Text>
                </View>
                <View style={styles.loadingArrView}>
                    {marsArray}
                </View>
            </ImageBackground>
        )
    }
}


export default WaitingScreen