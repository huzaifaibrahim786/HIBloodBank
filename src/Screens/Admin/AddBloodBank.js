/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useState,useEffect} from 'react';
import firebase from '../../Config/Firebase.js'
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux'

function AddBloodBank() {

    const [address, setAddress] = useState("");
    const [ph,setPh] = useState("")
    const [name,setName] = useState("")




    useEffect(()=>{
        
      },[])
    

    const addbloodbanks = ()=>{
        if(name === "" || address === "" || ph === ""){
            alert("Please Fill All The Required Informations")
        }else{
            firebase.database().ref('bloodbanks/'+name).set({
                name:name,
                address:address,
                ph:ph,
            })
            
            alert("Blood Bank Added Successfully...")
        }
    }

    
    return (
        <>
        <ScrollView style={styles.container}>
        <Text style={{fontSize:32,paddingBottom:10,fontWeight:"bold",marginTop:20,marginLeft:10}}>Enter Information :</Text>
        <View style={{display:'flex',padding:20}}>

        <OutlinedTextField
            label='Enter BloodBank Name'
            keyboardType='default'
            name='name'
            tintColor="#7C0A02"
            baseColor="#7C0A02"
            value={name}
            onChangeText={setName}
          />


         <OutlinedTextField
            label='Enter BloodBank Address'
            keyboardType='default'
            name='address'
            tintColor="#7C0A02"
            baseColor="#7C0A02"
            value={address}
            onChangeText={setAddress}
          />


          
        <OutlinedTextField
            label='Enter Phone Number'
            keyboardType='default'
            name='ph'
            tintColor="#7C0A02"
            baseColor="#7C0A02"
            value={ph}
            onChangeText={setPh}
          />



        </View>


        <TouchableOpacity style={styles.loginBtn} onPress={()=>addbloodbanks()}>
        <Text style={{color:"white"}}>Add Blood Bank</Text>
        </TouchableOpacity>
      
        </ScrollView>

        </>
    )
}


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUsername:state.currentUsername,
    currentUseremail:state.currentUseremail,
    password:state.password,
    uid:state.uid,
    topic:state.topic
})
  
const mapDispatchToProps = (dispatch) => ({
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(AddBloodBank)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f4',
      flex: 1,
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#7C0A02",
        borderRadius:25,
        height:50,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
    },
    

  });

