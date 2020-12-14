import React from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native';


export default class LoginScreen extends React.Component{
render(){
    return (
        <View style={styles.container}>
            <Text style={{fontSize:40}}>SWACHH BHARAT MISSION</Text>
<TextInput  
style={{borderWidth:3,width:200,marginTop:30}}
placeholder='Enter your email'
keyboardType='email-address'
></TextInput>
<TextInput  
style={{borderWidth:3,width:200,marginTop:30}}
placeholder='*******'
keyboardType='email-address'
></TextInput>
</View>


    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });