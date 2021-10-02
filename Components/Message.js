import React,{useState} from 'react'
import { Alert, Modal, StyleSheet, Text,TouchableOpacity, Pressable, View, ScrollView,Dimensions, Button, TouchableHighlight } from 'react-native'
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { Colors } from "../Css/Colors";
import Formcontact from './Formcontact';


const height = Dimensions.get("window").height;



const Message = () => {
  const [modalVisible, setModalVisible] = useState(false);

  
  return (<>
    
      <Modal
        animationType="slide"
        transparent={true}
       
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.layermodal}>
          <View style={{flex:1,width:'100%',}}></View>
          <View style={styles.containermodal}>
            <TouchableOpacity style={styles.iconclose} onPress={() => setModalVisible(!modalVisible)}>
            <AntDesign name="closecircleo" size={30} color={Colors.brown} />
              </TouchableOpacity>
           
              <ScrollView>
             
              <Formcontact />

            
             
              </ScrollView>
            </View>

        </View>
       
      </Modal>




      <TouchableHighlight onPress={() => setModalVisible(!modalVisible)} style={styles.buttonopenmodal}>
      <View >
      <AntDesign name="message1" color={Colors.brown} size={30} />
      </View>
      </TouchableHighlight>

     
       
      
   </>
  )
}

export default Message

const styles = StyleSheet.create({
  layermodal:{
    flex:1,
    backgroundColor:"#000000AA",
    justifyContent:"flex-end"
  },
  containermodal:{
      flex:1,
      width:'100%',
      backgroundColor:Colors.darkgrey,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      paddingHorizontal:10,
      minHeight:height - 300
  },
  buttonopenmodal:{
    backgroundColor:'rgba(0, 0, 0,0.7)',
    position:"absolute",
    alignItems:"center",
    justifyContent:"center",
    zIndex:1,
    bottom:10,
    right:5,
    width:50,
    height:50,
    borderRadius:2,
    

  },
 
  iconclose:{
    position:"absolute",
    zIndex:1,
    
    right:10,
    top:10,
  }
 
 
})
