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
  Linking,
} from 'react-native';
import {settopic} from '../../Store/Action'

import { connect } from 'react-redux'


function BloodBankList(props){
    const [bloodBanks,setBloodBanks] = useState([])

  

    const edittopic=(topic)=>{
      props.settopic(topic)
      props.navigation.navigate("EditQuiz")
    }
    const deletetopic=(key)=>{
      firebase.database().ref("quiz/"+key).remove()
    }
    const call=(ph)=>{
        let phoneNumber = ph;
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:$'+ph;
        } else {
          phoneNumber = 'telprompt:$'+ph;
        }
        Linking.openURL(phoneNumber);
        console.log(ph)
      }
    useEffect(()=>{
      firebase.database().ref('bloodbanks').on("value",function(snapshot){
        let newArray = []
        snapshot.forEach((data)=>{
          const dataVal = data.val();
          newArray.push({
            key:data.key,
            name:dataVal.name,
            ph:dataVal.ph,
            address:dataVal.address
          })

        })
        setBloodBanks(newArray)
      })
    },[])

      return(
        <>
 
          <View style={{flex:1}}>
            <ScrollView>
          <View style={styles.boxes}>

              {bloodBanks.map((v,i)=>{
                  return(
                    <View style={styles.topics} key={i}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../Assets/hospital.png')}
                    />
                    <View style={{marginTop:20}}>
                        <Text style={styles.features}>{v.name}</Text>
                        <Text>{v.address}</Text>
                        <Text>{v.ph}</Text>
                        <TouchableOpacity style={styles.loginBtn} onPress={()=>call(v.ph)}>
                        <Text style={{color:"white"}}>Call Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                  )
                
              })}
            
            

          </View>
          </ScrollView>
          <ActionButton buttonColor="#7C0A02" onPress={()=>props.navigation.navigate("AddBloodBank")}></ActionButton>

          </View>
        </>
    )
    
    
  
};


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUsername:state.currentUsername,
    usertype:state.usertype
})
  
const mapDispatchToProps = (dispatch) => ({
  settopic:(topic)=> dispatch(settopic(topic))
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(BloodBankList)

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
        display:'flex',justifyContent:"center",flex:1,flexDirection:"row",
        backgroundColor:'white',
        width:'80%',
        height:170,
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
    },
    tinyLogo: {
       width: 150,
       height: 150,
       marginRight:50,
       marginTop:10
     },
     loginBtn:{
       width:"100%",
       padding:25,
       backgroundColor:"black",
       borderRadius:25,
       height:40,
       alignItems:"center",
       justifyContent:"center",
       marginTop:10,
       marginBottom:10
     },
     features:{  
       fontSize:25,
       fontWeight:"bold",
     },

  });



