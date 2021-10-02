import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import { Colors } from "../Css/Colors";
import { Ionicons, AntDesign,MaterialIcons } from "react-native-vector-icons";
  
 
  
 export const Mytextinput = ({ Icon,ionicons
  ,materialicons,
  antdesign,
  isPassword,
  isPassword2,
  hidePassword,
  hidePassword2,
  setHidePassword,
  setHidePassword2,
   ...props }) => {
  
 
 
     return(
        <View style={styles.containertextinput}>
          <View style={styles.lefticon}>
          {materialicons && <MaterialIcons name={Icon} color={Colors.brown} size={30} /> } 
          {antdesign && <AntDesign name={Icon} color={Colors.brown} size={30} /> } 
          {ionicons && <Ionicons name={Icon} color={Colors.brown} size={30} /> }  
            
          </View>
          <TextInput style={styles.textinputstyle} {...props} />
          {isPassword && (
          <TouchableOpacity
          style={styles.righticon}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <Ionicons
              name={hidePassword ? "md-eye-off" : "md-eye"}
              size={30}
              color={Colors.brown}
            />
          </TouchableOpacity>
        )}
        {isPassword2 && (
          <TouchableOpacity
          style={styles.righticon}
            onPress={() => {
              setHidePassword2(!hidePassword2);
            }}
          >
            <Ionicons
              name={hidePassword2 ? "md-eye-off" : "md-eye"}
              size={30}
              color={Colors.brown}
            />
          </TouchableOpacity>
        )}
        </View>
      );
     }
  




const styles = StyleSheet.create({
    textinputstyle: {
        backgroundColor: Colors.white,
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 0,
        fontSize: 16,
        height: 60,
        marginVertical: 3,
    
        color: Colors.black,
      },
      containertextinput: {
        marginTop: 20,
        width: "100%",
      },
      lefticon: {
        position: "absolute",
        zIndex: 1,
        left: 15,
        top: 15,
      },
      righticon:{
        right: 15,
        top: 15,
        position: "absolute",
        zIndex: 1,
      }
})
