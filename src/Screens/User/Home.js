/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,Alert,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux'
import firebase from '../../Config/Firebase'
import {signout} from '../../Store/Action'


const Home = (props) => {

  
  const backAction = () => {
    Alert.alert("Exit App", "Are You Sure You Want To Exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };


  const [topics,setTopics] = useState([])

  const startQuiz = (topic)=>{
    props.navigation.navigate("Quiz",{topicKey:topic})
  }

  useEffect(()=>{
    firebase.database().ref('users').on("value",function(snapshot){
      let newArray = []
      snapshot.forEach((data)=>{
        const dataVal = data.val();
        newArray.push({
          key:data.key
        })

      })
      setTopics(newArray)
    })

    
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  },[])
  {console.log(props.hasUser,props.usertype,props.isDonor)}
  if(props.hasUser === false && props.usertype === null){
    props.navigation.navigate("Login")
    return true
  }
  else if(props.hasUser === true && props.usertype === "user"){
    return (
      <>
          <ScrollView style={styles.container}>
          <View style={styles.boxes}>
            {props.isDonor ?
            
            <TouchableOpacity style={styles.topics}>
            <View style={{justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:20,fontWeight:"bold"}}>You Are A Donor</Text>
            </View>
          </TouchableOpacity>
             : 
             
             <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate('BecomeDonor')}>
             <View style={{justifyContent:"center",alignItems:"center"}}>
               <Text style={{fontSize:20,fontWeight:"bold"}}>Become A Donor</Text>
             </View>
           </TouchableOpacity>
            }
          



                <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate('Donors')}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Donors</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate('BloodBanks')}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Blood Banks</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate('BloodInfo')}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Blood Info</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate('Profile')}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Profile</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.topics} onPress={()=>props.signout()}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Logout</Text>
                  </View>
                </TouchableOpacity>

              
            
          </View>
          </ScrollView>
      </>
    );
  }
  else if(props.hasUser === true && props.usertype === "admin"){
    props.navigation.navigate("AdminHome")
    return null
  }
  else{
    return false
  }
    
  
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7C0A02',
    flex: 1,
  },
  boxes:{
      marginTop:10,
      flexDirection:'row',
      justifyContent:'space-around',
      flexWrap:'wrap'
  },
  topics:{
      backgroundColor:'white',
      width:'45%',
      height:150,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:20,
      borderColor:'black',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
      borderRadius:10
  },
  

});


const mapStateToProps = (state) => ({
  hasUser:state.hasUser,
  currentUsername:state.currentUsername,
  usertype:state.usertype,
  isDonor:state.isDonor
})

const mapDispatchToProps = (dispatch) => ({
  signout:()=> dispatch(signout())

})


export default connect(mapStateToProps,mapDispatchToProps)(Home)

