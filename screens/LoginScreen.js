import React from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native';


export default class LoginScreen extends React.Component{
  constructor(){
    super()
    this.state={
      emailId:'',
      password:''
    }
  }

signUp(email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    return alert("User successfully registered")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return alert(errorMessage)
  });
}
login(email, password){
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    return alert("User successfully logged in")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return alert(errorMessage)
  });
}



render(){
    return (
        <View style={styles.container}>
            <Text style={{fontSize:40}}>SWACHH BHARAT MISSION</Text>
<TextInput  
style={{borderWidth:3,width:200,marginTop:30,borderRadius:5}}
placeholder='Enter your email'
keyboardType='email-address'
></TextInput>
<TextInput  
style={{borderWidth:3,width:200,marginTop:30,borderRadius:5}}
placeholder='*******'
keyboardType='email-address'
></TextInput>
<TouchableOpacity style={styles.button}onPress={()=>{this.login(this.state.emailId,this.state,password)}}>
<Text style={styles.text}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={()=>{this.signUp(this.state.emailId,this.state,password)}}>
<Text style={styles.text}>SignUp</Text>
</TouchableOpacity>
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
    text:{
      fontSize:25,
      textAlign:'center'
    },
    button:{
      backgroundColor:'yellow',
      margin:20

    }
  });