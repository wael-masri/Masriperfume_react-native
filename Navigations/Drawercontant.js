import React,{useEffect,useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialCommunityIcons,Octicons} from 'react-native-vector-icons';
import { Colors } from '../Css/Colors';





export function DrawerContent(props) {
    var DB = "http://192.168.1.104:5000/Images/";
const [dataprofile ,setdataprofile] = useState([]);


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

    const paperTheme = useTheme();

    

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                           {dataprofile.profilepic === "" && <Avatar.Image 
                                source={require('../assets/Images/nophoto.png')}
                                size={60}
                            /> } 
                             {dataprofile.profilepic !== "" && <Avatar.Image 
                                source={{
                                    uri: `${DB + dataprofile.profilepic}` ,
                                  }}
                                size={60}
                            /> }
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{dataprofile.username}</Title>
                                <Caption style={styles.caption}>@{dataprofile.username}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>6</Paragraph>
                                <Caption style={styles.caption}>Orders</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                        inactiveTintColor={Colors.brown}
                        
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('MASRI PERFUME')}}
                        />
                        <DrawerItem 
                        inactiveTintColor={Colors.brown}
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                        inactiveTintColor={Colors.brown}
                            icon={({color, size}) => (
                                <Octicons 
                                name="list-unordered" 
                                color={color}
                                size={28}
                                />
                            )}
                            label="My Orders"
                            onPress={() => {props.navigation.navigate('My Orders')}}
                        />
                         <DrawerItem 
                        inactiveTintColor={Colors.brown}
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="cube-send" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Subscriber"
                            onPress={() => {props.navigation.navigate('Subscriber')}}
                        />
                       
                        
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                inactiveTintColor={Colors.red}
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
        marginTop: -4,
      paddingLeft: 20,
      paddingVertical: 20,
      backgroundColor: Colors.brown
      
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: Colors.white
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: Colors.darklight
      
      
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      
      
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
      
      
      
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      color: Colors.black
      
    },
    drawerSection: {
      marginTop: 15,
      
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: Colors.brown,
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
      
    },
  });
