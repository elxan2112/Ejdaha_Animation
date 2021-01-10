import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage:{
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },
    searchBtn:{
        width: '100%',
        alignItems: 'center'
    },
    btnImage: {
        width: 50, 
        height: 50, 
        marginBottom: 35,
    },
  });

  export default styles