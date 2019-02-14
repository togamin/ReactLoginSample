import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class TextInputView extends React.Component{
  render(){
    return(
        <TextInput
          style = {styles.textInputField}
          autoCapitalize = "none"
          autoCorrect={false}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.pass}
        />
    );
  }
}

const styles = StyleSheet.create({
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

export default TextInputView;