import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text,View,Image, TextInput,StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'

export default class SiteDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        this.render = this.render.bind(this)
      }
 
    render(){
        
        const {navigate} = this.props.navigation;
        const {item} = this.props.navigation.state.params;
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // borderWidth: 1,
              // borderColor: 'red',
            },
            image: {
              width: 150,
              height: 150,
              margin: 0,
              resizeMode: 'contain',
            },
            textCenter: {
            },
            row: {
              flexDirection: 'row',
              flexWrap: 'wrap',
            },
            column:{
                flexDirection: 'column',
                paddingLeft:10,
                width: '50%',
            },
            columnImage: {
              flexDirection: 'column',
              width:'50%',
              height:120
              // borderWidth: 1,
              // borderColor: 'blue',
            },
          });
        return(
          
            <View   style = {{
                marginTop:5,
                fontSize:28,
                marginBottom:0,
                backgroundColor:"#F5F5F5",
                alignSelf:"center",

            }}>
                 <Text
            style = {{
                marginTop:20,
                fontSize:28,
                fontFamily:"SemiBold",
                alignSelf:"center",

            }}>Venue Details</Text>
            
            <View style={styles.container}>
                 <View style={styles.row}>
                      <View style={styles.columnImage}>
                              <Image source ={{uri: item.image}} style={styles.image}/>
                      </View>   
                      <View style={styles.column}>
                      <View style={styles.row}>
                      <Icon name="right" color="#00716F" size={20}/>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      flexDirection: "column",
                                      color:"#00716F",
                                      textDecorationLine: 'underline'
                                     }}>Name:</Text>                
                
                         </View>
                         <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      flexDirection: "column",
                                      
                                      }}>{item.name}</Text>                
                
                         </View>
                         <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      flexDirection: "column"
                                     }}>    </Text>                
                
                         </View>
                         <View style={styles.row}>
                         <Icon name="infocirlceo" color="#00716F" size={20}/>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      flexDirection: "column",
                                      color:"#00716F",
                                      textDecorationLine: 'underline'
                                     }}>Main Contact:</Text>                
                
                         </View>
                         <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      alignSelf:"center",
                                      }}>{!(item.contacts && item.contacts[0] !== undefined)?"":item.contacts[0].name}</Text>                
                
                         </View>
                         </View>
                 </View>
                 <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"Regular",
                                      }}></Text>  
                    </View> 
                    <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"Regular",
                                      }}></Text>  
                    </View> 
                    <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:22,
                                      fontFamily:"Regular",
                                      }}></Text>  
                    </View> 
                    <View style={styles.row}>
                    <Icon name="home" color="#00716F" size={20}/>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      color:"#00716F",
                                      textDecorationLine: 'underline'
                                      }}>Address:</Text>  
                    </View>   
                         
                    <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      }}>{item.address}</Text>  
                    </View>  
                    <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      }}></Text>  
                    </View>  
                    <View style={styles.row}>
                    <Icon name="phone" color="#00716F" size={20}/>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      color:"#00716F",
                                      textDecorationLine: 'underline'
                                      }}>Phone:</Text>  
                    </View>       
                    
                    <View style={styles.row}>
                     <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{item.contacts && item.contacts[0] !== undefined?item.contacts[0].phone:""}</Text> 
                                    
                       
                        </View>       
                        <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{item.contacts && item.contacts[0] !== undefined && item.contacts[0].phone? "        Phone":""}</Text> 
                                    
                       
                        </View>                                             
                         </View>
                         <View style={styles.row}>
                     <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"Regular",
                                      
                                      }}>{(item.contacts && item.contacts[0] !== undefined && item.contacts[0].phone_home !== undefined)?item.contacts[0].phone_home:""}</Text> 
                                    
                       
                        </View>       
                        <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"Regular",
                                      
                                      }}>{item.contacts && item.contacts[0] !== undefined && item.contacts[0].phone_home?"        Home": ""}</Text> 
                                    
                       
                        </View>     
                        <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      }}></Text>  
                    </View>       
                                                            
                         </View>
                           
                    <View style={styles.row}>
                    <Icon name="mail" color="#00716F" size={20}/>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      color:"#00716F",
                                      textDecorationLine: 'underline'
                                      }}>Email:</Text>  
                    </View>    
                    <View style={styles.row}>
                     <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{item.contacts && item.contacts[0] !== undefined?item.contacts[0].email:""}</Text> 
                                    
                       
                        </View>       
                        <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{(item.contacts && item.contacts[0] !== undefined && item.contacts[0].phone !== undefined)?"        Work": ""}</Text> 
                                    
                       
                        </View>       
                         </View>
                         <View style={styles.row}>
                         <Icon name="contacts" color="#00716F" size={20}/>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      
                                      color:"#00716F",
                                      textDecorationLine: 'underline'
                                      }}>Other Contacts:</Text>  
                    </View> 
                    <View style={styles.row}>
                     <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{item.contacts && item.contacts[1] !== undefined ?item.contacts[1].name:""}</Text> 
                                    
                       
                        </View>       
                        <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{item.contacts && item.contacts[1] !== undefined ?item.contacts[1].phone: ""}</Text> 
                                    
                       
                        </View>     
                        <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      }}></Text>  
                    </View>       
                                                            
                         </View>
                   
                   <View style={styles.row}>
                     <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{item.contacts && item.contacts[2] !== undefined ?item.contacts[2].name:""}</Text> 
                                    
                       
                        </View>       
                        <View style={styles.column}>   
                        <Text
                                      style = {{
                                      fontSize:18,
                                      fontFamily:"SemiBold",
                                      
                                      }}>{item.contacts && item.contacts[2] !== undefined ?item.contacts[2].phone: ""}</Text> 
                                    
                       
                        </View>     
                        <View style={styles.row}>
                                     <Text
                                      style = {{
                                      fontSize:18,
                                      textAlign:"left",
                                      fontFamily:"SemiBold",
                                      }}></Text>  
                    </View>       
                                                            
                         </View>
                    
                         </View>
            </View>
        )
    }
}