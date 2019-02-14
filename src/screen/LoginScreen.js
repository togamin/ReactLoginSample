import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import TextInputView from '../components/TextInputView';

class LoginScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.loginText}>ログイン</Text>
        <Text style = {styles.textInputTitle}>Email Address</Text>
        <TextInputView placeholder = "Email Address"/>
        <Text style = {styles.textInputTitle}>Password</Text>
        <TextInputView placeholder = "Password" pass='true'/>

        <View style = {styles.btnContainer}>
          <TouchableHighlight style = {styles.btn}>
            <Text style = {styles.btnText}>ログイン</Text>
          </TouchableHighlight>
        </View>
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
  loginText:{
    fontSize:27,
    width:'100%',
    marginBottom:18,
    paddingLeft:9,
    alignItems:'center',
  },
  textInputTitle:{
    fontSize:18,
  },
  btnContainer:{
    width:'100%',
    alignItems:'center',
  },
  btn:{
    width:'60%',
    height:48,
    marginTop:18,
    marginBottom:18,
    borderRadius:9,
    backgroundColor:'#c71585',
    alignItems:'center',
    justifyContent:'center',
    //影
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:3,
    zIndex:10,
  },
  btnText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff',
  }
});

export default LoginScreen;