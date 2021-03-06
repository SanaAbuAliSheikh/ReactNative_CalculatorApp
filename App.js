/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import Calculator class
import Calculator from './Components/Calculator';

const App = () => {

  // View that user can see
    return (
      <View style={styles.container}>
        {/* <Text style={[styles.sectionContainer]}>WELCOME TO CALCULATOR APP</Text> */}
        <Calculator></Calculator>
      
      {/* <Image source={{uri: 'https://jarodsneed.pythonanywhere.com/static/img/react-vector-logo.png'}} style={{width: 193, height: 200,}}/>
       */}
      </View>
    );
  }

// styling for this App.js
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  button:{
    fontSize: 10,
    justifyContent:"center",
    alignItems:"center",
    
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
