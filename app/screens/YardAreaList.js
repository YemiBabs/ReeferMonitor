import  React, { Component}  from 'react';
import {Image, StyleSheet, View, Text, StatusBar } from "react-native";
import { parseString } from "react-native-xml2js";
import { withNavigationFocus } from 'react-navigation';
import HTML from 'react-native-render-html';
import { WebView } from 'react-native-webview';
import base64 from 'react-native-base64';

/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = (e) => {
  if (xhr.readyState !== 4) {
    return;
  }

  if (xhr.status === 200) {
    console.log('success', xhr.responseXML);
  } else {
    console.warn('error');
  }
};

xhr.open('GET', 'http://10.0.0.14:9080/apex/api/query?filtername=REEFERMONITOR&operatorId=DPW&complexId=DPWR&facilityId=RWG&yardId=RWG&mode=SNX', true);
xhr.setRequestHeader("Authorization", "Basic " + base64.encode("mobile:_ABCabc123"));
xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
xhr.setRequestHeader("Access-Control-Allow-Origin", "Yes");
xhr.setRequestHeader("Access-Control-Allow-Headers", "Authorization");

xhr.responseType = "document";
xhr.send();

//const htmlContent = {xhr.responseXML};


function YardAreaList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexdirection: 'column'}}>
      <Text onPress={() => navigation.navigate('RowDetails')}>Yard Area List</Text>
      <Text>Ready State:  {xhr.readyState} and Status : {xhr.statusText}</Text>
         <Text>  {xhr.responseXML} </Text>
    </View>

  );
}
*/



//var authUrl = location.origin + '/secured-path/';
/*var authUrl = 'http://10.0.0.14:9080/apex/api/query?filtername=REEFERMONITOR&operatorId=DPW&complexId=DPWR&facilityId=RWG&yardId=RWG';
          var xhr = new XMLHttpRequest();
           xhr.open("get", authUrl, true);
           xhr.setRequestHeader("Authorization", "Basic " + base64.encode("mobile:_ABCabc123"));
           xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
           xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
           xhr.setRequestHeader("Access-Control-Allow-Origin", "Yes");
           xhr.setRequestHeader("Access-Control-Allow-Headers", "Authorization");

            xhr.send("");
             if (xhr.status == 200) {
               //location.href = authUrl;
               } else {
               alert("⚠️ Authentication failed.");
       }

fetch(authUrl, {
        method: 'get',
        }).then(function(response) {
          console.log(response);
         });*/

function YardAreaList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexdirection: 'column'}}>
      <Text style={styles.welcomeText} onPress={() => navigation.navigate('RowDetails')}>Yard Area List</Text>

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
         textAlign: "auto",
         fontSize: 24,
       //  fontWeight: "bold"
     },
     });


export default YardAreaList;