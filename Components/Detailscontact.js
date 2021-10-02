import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Colors } from "../Css/Colors";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Entypo,
    AntDesign,
   
  } from "react-native-vector-icons";
const Detailscontact = () => {
    return (
        <View>
           <Text style={styles.title_contact}>get in touch</Text>
        <View style={styles.iconcontainer}>
          <Ionicons
            name="location-outline"
            color={Colors.brown}
            size={60}
            style={styles.innercontainericon}
          />
        </View>
        <View style={styles.containertext_contact}>
          <Text style={styles.text_contact}>
            Lebanon,Tripoli-zehriyeh(latifa street)
          </Text>
        </View>

        <View style={styles.iconcontainer}>
          <Ionicons
            name="call-outline"
            color={Colors.brown}
            size={60}
            style={styles.innercontainericon}
          />
        </View>
        <View style={styles.containertext_contact}>
          <Text style={styles.text_contact}>+961-71620485</Text>
        </View>

        <View style={styles.iconcontainer}>
          <Entypo
            name="email"
            color={Colors.brown}
            size={60}
            style={styles.innercontainericon}
          />
        </View>
        <View style={styles.containertext_contact}>
          <Text style={styles.text_contact}>masri_1997@hotmail.com</Text>
        </View>

        

        <View style={{marginTop:20}}>
               


               
               <SocialIcon
                 title='Sign In With Facebook'
                 button
                 type='facebook'
                 style={{borderRadius:0}}
               />

               <SocialIcon
                 title='Sign In With Twitter'
                 button
                 type='twitter'
                 style={{borderRadius:0}}
               />

              

               <SocialIcon
                title='Sign In With Instagram'
                 button
                 type='instagram'
                 style={{borderRadius:0}}
               />
         </View>
        </View>
    )
}

export default Detailscontact

const styles = StyleSheet.create({
    title_contact: {
        color: Colors.brown,
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 2,
        fontSize: 25,
        marginVertical: 40,
      },
      iconcontainer: {
        alignSelf: "center",
        borderRadius: 2,
      },
      innercontainericon: {
        margin: 15,
      },
      text_contact: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 10,
        color: Colors.blacklight,
      },
      containertext_contact: {
        alignSelf: "center",
       
      },
})
