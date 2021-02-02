
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  SectionList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';


class Splash extends React.Component {

    constructor(props){
        super(props)

        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        },5000)
    }
    render(){
        
    return (

        <>
            <View style={styles.background}>
                <Image source={require('../Assets/fsplash.png')} style={styles.image}/>
            </View>
        </>
        
    )

}
}

export default Splash

const styles = StyleSheet.create({

    background:{
        height:'100%',
        width:"100%",
        backgroundColor:"#9F1B1F"
    },
    image:{
        width:"100%",
        height:"100%"
    }

})
