import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image,Button,TouchableOpacity } from 'react-native'
import ImageOverlay from "react-native-image-overlay";
import { Colors } from '../Css/Colors';
import { Ionicons, AntDesign } from "react-native-vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
const Formprofile = () => {
    var DB = "http://192.168.1.104:5000/Images/";
    const [dataprofile ,setdataprofile] = useState([]);
    
    const navigation = useNavigation();
           // get data from storage
    const getData = async () => {
        try {
           const jsonValue = await AsyncStorage.getItem('masriaccount')
           const datastorage =  JSON.parse(jsonValue);
           setdataprofile(datastorage);
            
           
          
        } catch(e) {
         return false
        }
      }
        useEffect(() => {
            getData();
        }, [])
    return (
        <>
         <View style={{flex:1,backgroundColor:"red"}}>
        {dataprofile.profilepic !== "" &&
                 <ImageOverlay
                 source={{ uri: `${DB + dataprofile.profilepic}` ,}}
                 overlayColor={Colors.blacklight}
                 overlayAlpha={0.9}
                 contentPosition="top"
                 >
                 
                <View style={{flex:1,alignItems:"center",paddingTop:50}}>
                <Image style={{width:100,height:100,borderRadius:50}}  source={{uri: `${DB + dataprofile.profilepic}` ,}} />
                <Text style={{color:Colors.white,fontSize:18,fontWeight:"700",letterSpacing:1,textAlign:"center"}}>{dataprofile.username}</Text>
                <Text style={{color:Colors.darklight,fontSize:15,fontWeight:"700",letterSpacing:1,textAlign:"center"}}>@{dataprofile.username}</Text>
                
                </View>     
               </ImageOverlay> 
        
        }
                {dataprofile.profilepic === "" &&
                 <ImageOverlay
                 source={require('../assets/Images/nophoto.png')}
                 overlayColor={Colors.blacklight}
                 overlayAlpha={0.9}
                 contentPosition="top"
                 >
                 
                <View style={{flex:1,alignItems:"center",paddingTop:50}}>
                <Image style={{width:100,height:100,borderRadius:50}}  source={require('../assets/Images/nophoto.png')} />
                <Text style={{color:Colors.white,fontSize:18,fontWeight:"700",letterSpacing:1,textAlign:"center"}}>{dataprofile.username}</Text>
                <Text style={{color:Colors.darklight,fontSize:15,fontWeight:"700",letterSpacing:1,textAlign:"center"}}>@{dataprofile.username}</Text>
                
                </View>     
               </ImageOverlay> 
        
        }
        
        
        
  
         
         </View>
         <View style={{flex:2,backgroundColor:Colors.darkgrey}}>
         <View style={{alignItems:"center",justifyContent:"center",height:50}}>
         <Text style={styles.innerbuttonprofile}>{dataprofile.email}</Text>
         </View >   
            <TouchableOpacity style={styles.boxbuttonprofile}>
                <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                    <Text style={styles.innerbuttonprofile}>Notification</Text>
                    <AntDesign name="doubleright" size={20} color={Colors.brown} />
                </View >
            </TouchableOpacity>
         
         <TouchableOpacity style={styles.boxbuttonprofile} onPress={() => navigation.navigate("Editprofile")}>  
            <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                <Text style={styles.innerbuttonprofile}>Edit Profile</Text>
                <AntDesign name="doubleright" size={20} color={Colors.brown} />
            </View > 
         </TouchableOpacity>

         <TouchableOpacity style={styles.boxbuttonprofile}>  
            <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                <Text style={styles.innerbuttonprofile}>Change Password</Text>
                <AntDesign name="doubleright" size={20} color={Colors.brown} />
            </View > 
         </TouchableOpacity>
        
         </View>

        </>
    )
}

export default Formprofile

const styles = StyleSheet.create({
    boxbuttonprofile:{
        
        height:50,
        
        padding:15,
        backgroundColor:Colors.white,
        marginVertical:5
    },
    innerbuttonprofile:{
        color:Colors.brown,
        fontSize:15,
        fontWeight:"700",
        letterSpacing:1
    }

})
