import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'

export default class Login extends React.Component{
 
    render(){
        
        const {navigate} = this.props.navigation;
        return(
            <View style={{backgroundColor:"#FFF"}}>
                <Image source ={require('../images/78786.jpg')}
                style = {{width:"100%", height : "45%"}}/>
            <Text
            style = {{
                fontSize:28,
                fontFamily:"SemiBold",
                alignSelf:"center",

            }}>Login</Text>
            <Text style = {{
                fontFamily:"Medium",
                marginHorizontal:10,
                marginTop:5,
                alignSelf:"center",
                textAlign:"center"

            }}>
               Welcome to your favorite Venue List App!
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
                                    <Icon name="mail" color="#00716F" size={24}/>
                                    <TextInput 
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
                                    <Icon name="lock" color="#00716F" size={24}/>
                                    <TextInput 
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
                <Text 
                 onPress={()=>navigate('SiteList')}
                style={{
                    color:"white",
                    fontFamily:"SemiBold",
                    width:"100%",
                    alignSelf:"center"
                }}>                    Login</Text>
                </View>
                <View style ={{
                                marginHorizontal:55,
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:10,
                                paddingVertical:5,
                            
                                }}>
                <Text
                
                onPress={()=>navigate('Register')}
                style={{
                    color:"#00716F",
                    fontFamily:"SemiBold",
                }}>Register</Text>
                </View>
            </View>
        )
    }
}