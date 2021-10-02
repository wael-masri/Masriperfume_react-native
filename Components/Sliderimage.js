import React,{useState} from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import { Colors } from '../Css/Colors';
const Sliderimage = () => {
    const windowHeight = Dimensions.get('window').height;
  const [data,setdata] = useState({
    images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", 
              
      ]
  })
  
  
  
    return (
        <>
            <SliderBox
             images={data.images}
             sliderBoxHeight={windowHeight * 0.4}
             dotColor={Colors.brown}
             inactiveDotColor={Colors.darkgrey}
             autoplay
             circleLoop />
        </>
    )
}

export default Sliderimage

const styles = StyleSheet.create({})
