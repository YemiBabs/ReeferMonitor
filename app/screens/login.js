import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

function login({ navigation }) {
const [userId, password] = useState(0);

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>reeferMonitor</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="UserId..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({userId:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('YardAreaList')}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Signup</Text>
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
    marginBottom:40
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
    width:"80%",
    backgroundColor:"#1E90FF",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});



export default login;


