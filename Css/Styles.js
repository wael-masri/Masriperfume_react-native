import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, Image,SafeAreaView,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from './Colors';
const StatusBarHeight = Constants.statusBarHeight;



export const Viewcontainer = styled.View`
 background-color:${Colors.darkgrey};
 flex: 1;
 padding: 25px;
 
 

`
export const Viewcontaineritems = styled.View`
 background-color:${Colors.darkgrey};
 flex: 1;
 
 
 

`

//  padding-top: ${StatusBarHeight}px;
 //-------------------------------------title Components

 export const TextTitle = styled.Text`
 color:${Colors.brown};
 text-transform: uppercase;
 font-size:25px;
 font-weight:bold;
 letter-spacing:1px;
 text-align:left;
 margin:5px 0px;
 letter-spacing:2px;


 
 
 

`
 //-------------------------------------end title components






export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${Colors.darklight};
  margin-vertical: 10px;
`;
