import * as React from 'react';
import { Text, View } from 'react-native';
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import Cart from "../Screens/Cart";
import {MaterialCommunityIcons,AntDesign} from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../Css/Colors';
import {connect} from "react-redux";


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


const Bottomnav = (props) => {
  return (
   
      <Tab.Navigator
    
      screenOptions={{
        headerShown: true,
       
        tabBarActiveBackgroundColor:Colors.black,
        tabBarInactiveBackgroundColor:Colors.black,
        tabBarActiveTintColor:Colors.brown,
        tabBarInactiveTintColor:Colors.darklight,
      }}>
       
        <Tab.Screen
         name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor:Colors.black,
 
            },
            headerTitleAlign: 'center',
            headerTintColor: Colors.brown,
            headerTitleStyle: {
              fontWeight: 'bold',

              
            },
            
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
         name="About Us"
          component={About}
          options={{
            headerStyle: {
              backgroundColor:Colors.black,
 
            },
            headerTitleAlign: 'center',
            headerTintColor: Colors.brown,
            headerTitleStyle: {
              fontWeight: 'bold',

              
            },
             
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="filetext1" color={color} size={size} />
            ),
          }}
           />
        <Tab.Screen 
        name="Contact Us"
         component={Contact}
         options={{
          headerStyle: {
            backgroundColor:Colors.black,

          },
          headerTitleAlign: 'center',
          headerTintColor: Colors.brown,
          headerTitleStyle: {
            fontWeight: 'bold',

            
          },
            
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contacts-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{
          headerStyle: {
            backgroundColor:Colors.black,

          },
          headerTitleAlign: 'center',
          headerTintColor: Colors.brown,
          headerTitleStyle: {
            fontWeight: 'bold',

            
          },
          tabBarBadge: props.quantity,
           
          tabBarIcon: ({ color, size }) => (<>
           
            <MaterialCommunityIcons name="cart-arrow-down" color={color} size={size} />
            </>
          ),
        }}/>
      </Tab.Navigator>
   
  );
}

export default connect((state) => {
  return {
    quantity: state.cart.reduce((total, item) => total + parseInt(item.qty), 0),
  };
})(Bottomnav);