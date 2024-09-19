import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import create_MK from './components/create_ps';
import tinhTien from './components/tinhTien';
import Icon from 'react-native-vector-icons/FontAwesome';
;
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import React, { useState } from 'react';



const Tab = createBottomTabNavigator();

function sceenMK(){
  return(
    <create_MK/>
  );
}
function sceenTT(){
  return(
    <tinhTien/>
  );
}



export default function App() {
  return (
    <NavigationContainer>
       
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
