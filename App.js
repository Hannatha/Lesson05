import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {MovieList} from './Movies';
import {BoatList} from './Boats';

const textStyle = {
  textAlign: 'center',
  fontSize: 30,
  color: 'white',
  backgroundColor: 'black',
};
const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text style={textStyle}>Lesson 05 Exercise</Text>
      <Text style={textStyle}>Get a Boat</Text>
      <BoatList />
    </ScrollView>
  );
};

export default App;
