import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Counter = (value, onIncrement, onDecrement) => {
    return(
      <View style={styles.root}>
        <TouchableOpacity style={styles.button} onPress={onDecrement}><Text>-</Text></TouchableOpacity>
        <View style={styles.counter}><Text>{value}</Text></View>
        <TouchableOpacity style={styles.button} onPress={onIncrement}><Text>+</Text></TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button: {
    width: 59,
    height: 59,
    backgroundColor: '#3de234',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 3
  },
  counter: {
    flex:1,
    height: 59,
    borderWidth: 1,
    borderColor: '#3ddd33',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  }
}); 

export default Counter;