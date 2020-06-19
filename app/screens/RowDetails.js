import  React  from 'react';
import { Image, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { parseString } from "react-native-xml2js";



function RowDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexdirection: 'column'}}>
                 <Text style={styles.welcomeText} onPress={() => navigation.navigate('ReeferDetails')}>Reefer List by Yard Row</Text>

               </View>

  );
  }


const styles = StyleSheet.create({
       welcomeText: {
         marginTop: 20,
         paddingVertical: 8,
      //   borderWidth: 4,
      //   borderColor: "#20232a",
      //   borderRadius: 6,
      //   backgroundColor: "#61dafb",
         color: "#20232a",
         textAlign: "center",
         fontSize: 18,
       //  fontWeight: "bold"
     },
     });




export default RowDetails;