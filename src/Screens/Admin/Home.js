/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import ActionButton from 'react-native-action-button';
import firebase from '../../Config/Firebase.js'
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
import {settopic} from '../../Store/Action'
import {signout} from '../../Store/Action'
import { connect } from 'react-redux'


function AdminHome(props){
    const [topics,setTopics] = useState([])

  

    const edittopic=(topic)=>{
      props.settopic(topic)
      props.navigation.navigate("EditQuiz")
    }
    const deletetopic=(key)=>{
      firebase.database().ref("quiz/"+key).remove()
    }
    useEffect(()=>{
      firebase.database().ref('quiz').on("value",function(snapshot){
        let newArray = []
        snapshot.forEach((data)=>{
          const dataVal = data.val();
          newArray.push({
            key:data.key
          })

        })
        setTopics(newArray)
      })
    },[])

      return(
        <>
            <ScrollView>
          <View style={styles.boxes}>
            
          <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate("DonorList")}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Donors</Text>
                  </View>
                </TouchableOpacity>


                
                <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate("BloodBankList")}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Blood Banks</Text>
                  </View>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate('AdminBloodInfo')}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Blood Information</Text>
                  </View>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.topics} onPress={()=>props.navigation.navigate('AdminProfile')}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Profile</Text>
                  </View>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.topics} onPress={()=>props.signout()}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>LogOut</Text>
                  </View>
                </TouchableOpacity>

          </View>
          </ScrollView>

        </>
    )
    
    
  
};


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUsername:state.currentUsername,
    usertype:state.usertype
})
  
const mapDispatchToProps = (dispatch) => ({
  settopic:(topic)=> dispatch(settopic(topic)),
  signout:()=> dispatch(signout())

})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(AdminHome)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f4',
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
        width:'90%',
        height:150,
        marginBottom:20,
        justifyContent:"center",
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
    ico:{
      width:30,
      height:30,
      resizeMode:"contain"
    }

  });



