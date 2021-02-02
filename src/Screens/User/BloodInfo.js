import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,ScrollView
} from 'react-native';

export default class BloodInfo extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Image source={require('../../Assets/bloodinfo.png')} style={{width:"100%",marginTop:"25%"}}/>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
  }
});
