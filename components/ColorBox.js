import {StyleSheet, View} from 'react-native';
import React from 'react';

function ColorBox({bgColor}) {
  return <View style={[styles.box, {backgroundColor: bgColor}]} />;
}

const styles = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
    marginRight: 3,
    borderRadius: 3,
  },
});

export default ColorBox;
