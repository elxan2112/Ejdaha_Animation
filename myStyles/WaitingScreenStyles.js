import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    backImage: {
        height:'100%' , 
        width:'100%' , 
        alignItems:'center' , 
        justifyContent:'center', 
        flex: 1
    },
    loadingTextView:{
        alignItems: 'center'
    },
    loadingText:{
        fontSize:30,
        color: 'white'
    },
    loadingArrView:{
        flexDirection: 'row', 
        marginTop: 250
    },
    loadingArr:{
        width: 50, 
        height: 50
    },
  });

  export default styles