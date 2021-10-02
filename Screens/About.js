import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Formabout from '../Components/Formabout';
import {Colors} from "../Css/Colors";
const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView>

      <Formabout />
      </ScrollView>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.darkgrey,
  }
})
