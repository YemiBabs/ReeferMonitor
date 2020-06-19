import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

function dnsScreen({ navigation }) {
const [dnsIp, setDnsIp] = useState('0.0.0.0');

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Server DNS</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="DNS or Server IP..."
           placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({dns:text})}/>
        </View>
       <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() =>  navigation.navigate('login')}>SAVE SETTING</Text>
        </TouchableOpacity>

      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#4169E1",
    marginBottom:10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#00BFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"60%",
    backgroundColor:"#1E90FF",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});



export default dnsScreen;

