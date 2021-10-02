import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "../Screens/Profile";
import Myorders from "../Screens/Myorders";
import React from "react";
import Bottomnav from './Bottomnavigation';
import { Colors } from '../Css/Colors';
import { DrawerContent } from './Drawercontant';
import Subscriber from '../Screens/Subscriber';
const Drawer = createDrawerNavigator();

export default function Drawernav() {
  return (
    <Drawer.Navigator
   
    drawerContent={props => <DrawerContent {...props} />}>
    
      <Drawer.Screen name="MASRI PERFUME" component={Bottomnav}
      options={{
        headerShown: false,
        title: 'MASRI PERFUME',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }} />
      <Drawer.Screen name="Profile" component={Profile}
      options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }} />
      <Drawer.Screen name="My Orders" component={Myorders}
      options={{
        title: 'My Orders',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }} />
           <Drawer.Screen name="Subscriber" component={Subscriber}
      options={{
        title: 'Subscriber',
        headerStyle: {
          backgroundColor:Colors.black,
          
        },
        headerTintColor: Colors.brown,
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing:3
        },
      }} />
      <Drawer.Screen name="Sign Out" component={Profile} />
     
    </Drawer.Navigator>
  );
}