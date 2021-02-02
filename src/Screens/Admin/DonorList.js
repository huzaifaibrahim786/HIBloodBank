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


function DonorList(props){
    const [donors,setDonors] = useState([])

  

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
      firebase.database().ref('donors').on("value",function(snapshot){
        let newArray = []
        snapshot.forEach((data)=>{
          const dataVal = data.val();
          newArray.push({
            key:data.key,
            fullname:dataVal.fullname,
            ph:dataVal.ph,
            dob:dataVal.dob,
            bloodGroup:dataVal.bloodGroup,
            lastbd:dataVal.lastbd
          })

        })
        setDonors(newArray)
      })
    },[])

      return(
        <>
        {          console.log(donors)
}
          <View style={{flex:1}}>
            <ScrollView>
          <View style={styles.boxes}>

              {donors.map((v,i)=>{
                  return(
                    <View style={styles.topics} key={i}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../Assets/user.png')}
                    />
                    <View>
                        <Text style={styles.features}>{v.fullname}</Text>
                        <Text>{v.bloodGroup}</Text>
                        <Text>{v.dob}</Text>
                        <Text>{v.lastbd}</Text>
                        <Text>{v.ph}</Text>
                        
        <TouchableOpacity style={styles.loginBtn} onPress={()=>call()}>
          <Text style={{color:"white"}}>Call Now</Text>
        </TouchableOpacity>

                    </View>
                </View>
                  )
                
              })}
            
            

          </View>
          </ScrollView>
          <ActionButton buttonColor="#7C0A02" onPress={()=>props.navigation.navigate("AddDonor")}></ActionButton>

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
  
  
export default connect(mapStateToProps,mapDispatchToProps)(DonorList)

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
       height: 170,
       marginRight:40,
     },
     loginBtn:{
       width:"80%",
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



