import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'

export default class Register extends React.Component{
 
    render(){
        return(
            <View style={{backgroundColor:"#FFF"}}>
                <Image source ={require('../images/78786.jpg')}
                style = {{width:"100%", height : "45%"}}/>
            <Text
            style = {{
                fontSize:28,
                fontFamily:"SemiBold",
                alignSelf:"center",

            }}>Register</Text>
            <Text style = {{
                fontFamily:"Medium",
                marginHorizontal:10,
                marginTop:5,
                alignSelf:"center",
                textAlign:"center"

            }}>
               Join Us!
            </Text>
                <View style ={{flexDirection:"row",
                                allignItem:"center",
                                marginHorizontal:55,
                                borderWidth:2,
                                marginTop:15,
                                paddingHorizontal:10,
                                borderColor:"#00716F",
                                borderRadius:23,
                                paddingVertical:2,
                            
                                }}>
                                    <TextInput 
                                        placeholder = "Email"
                                        placeholderTextColor="#00716F"
                                        style ={{paddingHorizontal:10}}
                                    />
                </View>
                <View style ={{flexDirection:"row",
                                allignItem:"center",
                                marginHorizontal:55,
                                borderWidth:2,
                                marginTop:15,
                                paddingHorizontal:10,
                                borderColor:"#00716F",
                                borderRadius:23,
                                paddingVertical:2,
                            
                                }}>
                                    <TextInput 
                                    secureTextEntry = {true}
                                     placeholder = "Password"
                                     placeholderTextColor="#00716F"
                                     style ={{paddingHorizontal:10}}
                                        style ={{paddingHorizontal:10}}
                                    />
                </View>
                <View style ={{flexDirection:"row",
                                allignItem:"center",
                                marginHorizontal:55,
                                borderWidth:2,
                                marginTop:15,
                                paddingHorizontal:10,
                                borderColor:"#00716F",
                                borderRadius:23,
                                paddingVertical:2,
                            
                                }}>
                                    <TextInput 
                                    secureTextEntry = {true}
                                     placeholder = "Confirm Password"
                                     placeholderTextColor="#00716F"
                                     placeholderAlign="center"
                                     style ={{paddingHorizontal:10}}
                                        style ={{paddingHorizontal:10}}
                                    />
                </View>
                <View style ={{
                                marginHorizontal:55,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:30,
                                backgroundColor:"#00716F",
                                paddingVertical:5,
                                borderRadius:23
                            
                                }}>
                <Text style={{
                    color:"white",
                    fontFamily:"SemiBold",
                }}>Register</Text>
                </View>
               
            </View>
        )
    }
}