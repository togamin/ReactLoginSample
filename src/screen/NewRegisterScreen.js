import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class LoginScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.newRegisterText}>新規登録</Text>
        <Text style = {styles.textInputTitle}>Email Address</Text>
        <TextInput style = {styles.textInputField}/>
        <Text style = {styles.textInputTitle}>Password</Text>
        <TextInput style = {styles.textInputField}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding:9,
    flex:1,
    justifyContent:'center',
  },
  newRegisterText:{
    fontSize:27,
    width:'100%',
    marginBottom:18,
    paddingLeft:9,
    alignItems:'center',
  },
  textInputTitle:{
    fontSize:18,
  },
  textInputField:{
    height:48,
    marginTop:9,
    marginBottom:18,
    paddingLeft:9,
    backgroundColor:'#eee',
    borderWidth:1,
    borderColor:'#ddd',
  }
});

export default LoginScreen;