import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class InitialScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <TouchableHighlight style = {styles.loginBtn} onPress = {()=>{this.props.navigation.navigate('LoginScreen')}}>
          <Text style = {styles.loginText}>ログイン</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.newRegisterBtn} onPress = {()=>{this.props.navigation.navigate('NewRegisterScreen')}}>
        <Text style = {styles.newRegisterText}>新規登録</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:9,
    alignItems:'center',
    justifyContent:'center',
  },
  loginBtn:{
    width:'100%',
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
  loginText:{
    fontSize:27,
    fontWeight:'bold',
    color:'#fff',
  },
  newRegisterBtn:{
    width:'100%',
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
  newRegisterText:{
    fontSize:27,
    fontWeight:'bold',
    color:'#fff',
  }
});

export default InitialScreen;