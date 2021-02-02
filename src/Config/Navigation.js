import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity,Text} from 'react-native'
import Home from '../Screens/User/Home.js'
import Splash from '../Screens/Splash.js'
import Login from '../Screens/Login.js'
import SignUp from '../Screens/SignUp.js'
import AdminHome from '../Screens/Admin/Home.js'
import BecomeDonor from '../Screens/User/BecomeDonor.js'
import {connect} from 'react-redux'
import {signout} from '../Store/Action'
import AddDonor from '../Screens/Admin/AddDonor.js';
import AddBloodBank from '../Screens/Admin/AddBloodBank.js';
import BloodBankList from '../Screens/Admin/BloodBankList.js';
import DonorList from '../Screens/Admin/DonorList.js';
import Donors from '../Screens/User/Donors.js'
import BloodBanks from '../Screens/User/BloodBanks.js'
import Profile from '../Screens/User/Profile.js'
import BloodInfo from '../Screens/User/BloodInfo.js'
import AdminProfile from '../Screens/Admin/Profile.js'
import AdminBloodInfo from '../Screens/Admin/BloodInfo.js'


const Stack = createStackNavigator();

function Navigation(props) {

  const signout=()=>{
    props.signout()
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
      <Stack.Screen name="Splash" options={{
          title:"Splash",
          headerTitleStyle:{
            color:"white",
            fontWeight:"bold",
            fontSize:25
          },
            headerLeft: null,
          headerStyle:{
            backgroundColor:"#5D1049"
          }
        }} component={Splash}
        options={{headerShown: false }} />

          


        <Stack.Screen name="Login" options={{
          title:"Login",
          headerTitleStyle:{
            color:"white",
            fontWeight:"bold",
            fontSize:25
          },
            headerLeft: null,
          headerStyle:{
            backgroundColor:"#5D1049"
          }
        }} component={Login}
        options={{headerShown: false }} />



        <Stack.Screen name="SignUp" options={{
          title:"SignUp",
          headerTitleStyle:{
            color:"white",
            fontWeight:"bold",
            fontSize:25
          },
          headerTintColor: '#fff',
          headerStyle:{
            backgroundColor:"#5D1049"
          }
        }} component={SignUp}
        options={{headerShown: false }} />


        
<Stack.Screen name="Home" options={{
          title:"Home",
          
          headerLeft: null,
          
        }} component={Home} 
        options={{
          headerStyle:{
            backgroundColor:"#7C0A02"
          },
          headerLeft:null,
          title:"Home",
          headerTitleStyle:{
            color:"white",
            fontWeight:"bold",
            fontSize:25
          }}}
         />



          
        <Stack.Screen name="AdminHome"
          component={AdminHome} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            
            headerLeft: null,
            title:"Admin Home",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            }}}
        />


        
        <Stack.Screen name="BecomeDonor"
          component={BecomeDonor} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Become Donor",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />

        <Stack.Screen name="AddDonor"
          component={AddDonor} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Add Donor",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />

        <Stack.Screen name="DonorList"
          component={DonorList} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Find Donor",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />


        <Stack.Screen name="AddBloodBank"
          component={AddBloodBank} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Add Blood Bank",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />

        <Stack.Screen name="BloodBankList"
          component={BloodBankList} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Find Blood Bank",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />


        <Stack.Screen name="Donors"
          component={Donors} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Search Donors",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />

        <Stack.Screen name="BloodBanks"
          component={BloodBanks} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Search Blood Banks",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />

        <Stack.Screen name="Profile"
          component={Profile} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"My Profile",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />

        <Stack.Screen name="AdminProfile"
          component={AdminProfile} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"My Profile",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />


          <Stack.Screen name="AdminBloodInfo"
          component={AdminBloodInfo} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Blood Info",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />

<Stack.Screen name="BloodInfo"
          component={BloodInfo} 
          options={{
            headerStyle:{
              backgroundColor:"#7C0A02"
            },
            headerTintColor: '#fff',

            title:"Blood Info",
            headerTitleStyle:{
              color:"white",
              fontWeight:"bold",
              fontSize:25
            },
           }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  hasUser:state.hasUser,
  currentUsername:state.currentUsername
})

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps,mapDispatchToProps)(Navigation)