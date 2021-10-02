import React from 'react'
import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import { Colors } from '../Css/Colors';
import Sliderimage from './Sliderimage';
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Formabout = () => {
    const windowHeight = Dimensions.get('window').height;
    return (
        <>
           <View style={{height:windowHeight * 0.4,backgroundColor:Colors.black}}>
               <Sliderimage />
           </View>
           <View style={{flexDirection:"row",height:windowHeight * 0.45,}}>
               <View style={{flex:1,backgroundColor:Colors.white,justifyContent:"space-between",height:"100%"}}>
                 <View style={{alignItems:"center",justifyContent:"center",marginVertical:20}}>
                
                    <Text style={{fontWeight:"700",color:Colors.black,fontSize:22}}>12K</Text>
                    <Text style={{color:Colors.blacklight,fontSize:13}}>Likes</Text> 
                 </View >
                 <View style={{alignItems:"center",justifyContent:"center",marginVertical:20}}>
                    <Text style={{fontWeight:"700",color:Colors.black,fontSize:22}}>120</Text>
                    <Text style={{color:Colors.blacklight,fontSize:13}}>Account</Text> 
                 </View>
                 <View style={{alignItems:"center",justifyContent:"center",marginVertical:20}}>
                    <Text style={{fontWeight:"700",color:Colors.black,fontSize:22}}>500</Text>
                    <Text style={{color:Colors.blacklight,fontSize:13}}>Subscriber</Text> 
                 </View>
                 
               </View>
               <View style={{flex:3,backgroundColor:Colors.darklight}}>
                   <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:3,}}>
                        <Text style={{letterSpacing:2,color:Colors.brown,fontSize:18,marginLeft:10,marginVertical:10}}>
                            Our About
                        </Text>
                        <Text style={{letterSpacing:1,marginHorizontal:5,color:Colors.blacklight}}>
                        A scent can tell a lot about its owner: herb, fresh, bright,
                         dark or powdery…

                        </Text>
                    </View>
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <MaterialCommunityIcons name="flower-tulip-outline" color={Colors.brown} size={40} />
                    </View>
                   </View>
                   <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                      <Image 
                      source={
                        require('../assets/Images/perfumeabout.jpg')
                      }
                      style={{width:230,height:180,borderRadius:2}} />
                  </View>
               </View>
           </View >
           <View style={{height:windowHeight * 0.4,backgroundColor:Colors.darklight}}>
               <Text style={{fontWeight:"700",color:Colors.brown,fontSize:22,textAlign:"center",marginVertical:20,letterSpacing:2}}>Our Work</Text>
               <Text
               style={{color:Colors.blacklight,fontSize:16,textAlign:"center",marginHorizontal:20,letterSpacing:1}}>We work hard here at Masri perfume 
                    to ensure that Corporate Social Responsibility
                     (CSR) is at the heart of everything we do. We 
                     work in line with our parent company A.S Watson
                      to ensure we continue to share 
                   our passion and commitment to 
                   bring more to life to our community today, and tomorrow.</Text>

           </View>
        </>
    )
}

export default Formabout

const styles = StyleSheet.create({})
