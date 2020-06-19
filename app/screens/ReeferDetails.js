import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';
import base64 from 'react-native-base64';
import { withNavigationFocus } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { parseString } from "react-native-xml2js";




function ReeferDetails({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

var headers = new Headers();
headers.append("Authorization", "Basic " + base64.encode("mobile:_ABCabc123"));
headers.append("Content-type", "text/xml;charset=UTF-8");
headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Headers", "Authorization");


    fetch('http://10.0.0.14:9080/apex/api/query?filtername=REEFERMONITOR&operatorId=DPW&complexId=DPWR&facilityId=RWG&yardId=RWG&mode=SNX',
    {method: 'GET',
    headers: headers
    })
   .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
             console.log("Not successful")
            }
        })
        //  .then(data => console.log(data.response.text))
          .catch(error => console.log('ERROR'));
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexdirection: 'column'}}>
         <Text style={styles.welcomeText}>Reefer Details</Text>
         <Text>{data}</Text>
       </View>
  )

 };



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
          fontSize: 24,
        //  fontWeight: "bold"
      },
      });

export default ReeferDetails;



