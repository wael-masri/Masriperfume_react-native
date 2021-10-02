import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Singleitem from "../Screens/Singleitem";
import Drawernav from './Drawernavigation';
import { Colors } from '../Css/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Placeorder from '../Screens/Placeorder';
import { Button } from 'react-native';
import Detailsorder from '../Screens/Detailsorder';
import Editprofile from '../Screens/Editprofile';
const Stack = createStackNavigator();

export default function Stacknav() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Login" component={Login} 
       options={{header: () => null}}
      />
       <Stack.Screen name="Singleitem" component={Singleitem} 
         options={{
            
            
            headerShown: false,
            headerTransparent:true,
        
          headerTintColor: Colors.brown,
          headerTitleStyle: {
            fontWeight: 'bold',
            letterSpacing:3
          },
         
        }} 
        
      />
      <Stack.Screen name="Register" component={Register}
       options={{
        title: 'REGISTER',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }}  />
      <Stack.Screen name="Placeorder" component={Placeorder}
       options={{
        title: 'PLACE ORDER',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }}  />
      <Stack.Screen name="detailsorder" component={Detailsorder}
       options={{
        title: 'DETAILS',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }}  />
      <Stack.Screen name="Editprofile" component={Editprofile}
       options={{
        title: 'Edit Profile',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }}  />
      <Stack.Screen name="Home" component={Drawernav}
       options={{header: () => null}}/>
      
    </Stack.Navigator>
  );
}