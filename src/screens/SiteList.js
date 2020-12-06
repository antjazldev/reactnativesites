import React from 'react';
import { FlatList, ActivityIndicator,Text, View,ImageBackground,TouchableWithoutFeedback } from 'react-native';
import { NavigationActions, SafeAreaView } from 'react-navigation';

export default class SiteList extends React.Component{
        constructor(props) {
        super(props);
        this.state = { isLoading: true };
      
      }
    
      componentDidMount() {
        return fetch('https://s3.amazonaws.com/decom_uploads/external/sites.json')
          .then(response => response.json())
          .then(responseJson => {
            this.setState(
              {
                isLoading: false,
                dataSource: responseJson.sites,
              },
              function() {}
            );
          })
          .catch(error => {
            console.error(error);
          });
      }
    render(){
        const {navigate} = this.props.navigation;
        if (this.state.isLoading) {
            return (
              <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
              </View>
            );
          }
        
        
        return(
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{
            justifyContent: 'center',
            flex: 1,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 5,
            marginTop: 5,
            }}>
                <Text
             style = {{
                fontSize:28,
                marginLeft: 10,
                fontFamily:"SemiBold",
                marginBottom: 2,
                alignSelf:"center",
                marginTop: 0

             }}>SiteList</Text>
        <FlatList
        contentContainerStyle={{  paddingBottom: 5 }}
          data={this.state.dataSource}
          onPress={()=>navigate('SiteDetail',{item})}
          renderItem={({ item  }) => (
            <TouchableWithoutFeedback  onPress={()=>navigate('SiteDetail',{item})}>
            <ImageBackground source={{uri: item.image}}  style={{width:"100%", height:170,paddingBottom:2,paddingTop:2}}
            
            >
             <Text 
            
                style = {{
                color:"white",
                fontFamily:"SemiBold",
                alignSelf:"center",
                textAlign:"center",
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                width:"100%"

            }}>
              {item.name}, {item.address}
            </Text>
           </ImageBackground>
           </TouchableWithoutFeedback>
          )}
          
          keyExtractor={({ id }, index) => id}
        />
      </View>
      </SafeAreaView>
      
            
        )
        
    }
    
}