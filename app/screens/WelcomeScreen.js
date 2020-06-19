import React, { Component, useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';


function WelcomeScreen({ navigation }) {

const [dnsIp] = useState('0.0.0.0');

    return (
            <View style={styles.container}>
                 <Text style={styles.welcomeText}> Welcome to reeferMonitor! </Text>
                 <View style= {styles.container2}>
                  <ImageBackground style={styles.welcomeImage} source='./app/assets/reefer.jpg'></ImageBackground>
                  </View>
                 <TouchableOpacity style={styles.loginBtn}>
                           <Text style={styles.loginText} onPress={() => { dnsIp === '0.0.0.0' ?  navigation.navigate('dnsScreen') :  navigation.navigate('login')}}>LOGIN</Text>
                 </TouchableOpacity>
            </View>
    );
}




const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
   justifyContent: "center",
   alignItems: "center",
   // height: '100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,
   },
  container2: {
      flex: 1,
     justifyContent: "center",
      alignItems: "center",
     //  justifyContent: "center",
     //  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 :0,
      },
    welcomeImage: {
   // width: 200,
   height: 400,
    opacity: 0.9,
    justifyContent: "center",
  //alignItems: "center",
   },
   container3: {
       flex: 1,
      justifyContent: "center",
    //  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0
      },
     welcomeText: {
       marginTop: 0,
       paddingVertical: 8,
    //   borderWidth: 4,
    //   borderColor: "#20232a",
    //   borderRadius: 6,
     //  backgroundColor: "#61dafb",
       color: "#20232a",
       textAlign: "center",
       fontSize: 25,
       fontWeight: "bold"
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
          color:"white",
          fontWeight: "bold"
        }

});



export default WelcomeScreen;