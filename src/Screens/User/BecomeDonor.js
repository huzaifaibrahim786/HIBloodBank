/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import OutlineInput from 'react-native-outline-input';
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

function BecomeDonor() {

    const [bloodGroup,setBloodgroup] = useState("")
    const currentDate = new Date();
    const [dob, setDob] = useState("");
    const [lastbd, setlastbd] = useState("");
    const [ph,setPh] = useState("")
    const [fullname,setFullname] = useState("")
    const [showdob, setShowdob] = useState(false);
    const [showlastbd, setShowlasdbd] = useState(false);



    useEffect(()=>{
        
      },[])
    

    const adddonor = ()=>{
        if(fullname === "" || lastbd === "" || ph === "" || dob === "" || bloodGroup === ""){
            alert("Please Fill All The Required Informations")
        }else{
            firebase.database().ref('donors').push({
                fullname:fullname,
                bloodGroup:bloodGroup,
                dob:dob,
                ph:ph,
                lastbd:lastbd
            })
            firebase.database().ref('users').child(props.uid).set({
                displayName:props.currentUsername,
                email:props.currentUseremail,
                uid:props.uid,
                password:props.password,
                isDonor:true
            })
            alert("You Become A Donor Now..")
        }
    }

    const onChangedob = (event, selectedDate) => {

      const newdate = selectedDate.toString()
      const date = newdate.substring(0, 15);
      setDob(date);
      setShowdob(Platform.OS === 'ios');
    };

    const onChangelastbd = (event, selectedDate) => {
        
      const newdate = selectedDate.toString()
      const date = newdate.substring(0, 15);
      setlastbd(date);
      setShowlasdbd(Platform.OS === 'ios');
    };
    
       
    
    return (
        <>
        <ScrollView style={styles.container}>
        <Text style={{fontSize:32,paddingBottom:10,fontWeight:"bold",marginTop:20,marginLeft:10}}>Enter Information :</Text>
        <View style={{display:'flex',padding:10}}>

        <OutlinedTextField
            label='Enter Full Name'
            keyboardType='default'
            name='fullname'
            tintColor="#7C0A02"
            baseColor="#7C0A02"
            value={fullname}
            onChangeText={setFullname}
          />


         <OutlinedTextField
            label='Enter Blood Group'
            keyboardType='default'
            name='bloodGroup'
            tintColor="#7C0A02"
            baseColor="#7C0A02"
            value={bloodGroup}
            onChangeText={setBloodgroup}
          />

        <TouchableOpacity
            onPress={() => setShowdob(true)}>
            <OutlinedTextField
                label='Enter Date Of Birh'
                keyboardType='default'
                name='dob'
                tintColor="#7C0A02"
                editable={false}
                baseColor="#7C0A02"
                placeholderTextColor='black'
                placeholder={dob}
                value={dob}
              /> 
          </TouchableOpacity>

          
        <OutlinedTextField
            label='Enter Phone Number'
            keyboardType='default'
            name='ph'
            tintColor="#7C0A02"
            baseColor="#7C0A02"
            value={ph}
            onChangeText={setPh}
          />

          <TouchableOpacity
            onPress={() => setShowlasdbd(true)}>
            <OutlinedTextField
                label='Enter Date Of Last Donation Of Blood'
                keyboardType='default'
                name='lastbd'
                tintColor="#7C0A02"
                editable={false}
                baseColor="#7C0A02"
                placeholderTextColor='black'
                placeholder={lastbd}
                value={lastbd}
              /> 
          </TouchableOpacity>

          {showdob && (
            <DateTimePicker
            testID="dateTimePicker"
            value={currentDate}
            mode='date'
            is24Hour={true}
            display="default"
            onChange={(event,date)=>onChangedob(event,date)}
            />
            )}

        {showlastbd && (
            <DateTimePicker
            testID="dateTimePicker"
            value={currentDate}
            mode='date'
            is24Hour={false}
            display="default"
            onChange={(event,date)=>onChangelastbd(event,date)}
            />
          )} 

        </View>


        <TouchableOpacity style={styles.loginBtn} onPress={()=>adddonor()}>
        <Text style={{color:"white"}}>Become A Donor</Text>
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
  
  
export default connect(mapStateToProps,mapDispatchToProps)(BecomeDonor)

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

