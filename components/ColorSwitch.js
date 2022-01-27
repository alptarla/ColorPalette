import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';

function ColorSwitch({colorName, onValueChange, value}) {
  return (
    <View style={styles.switch}>
      <Text style={styles.switchText}>{colorName}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    fontWeight: 'bold',
  },
});

export default ColorSwitch;
