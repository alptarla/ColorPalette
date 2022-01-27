import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function ColorBar({hexCode, colorName}) {
  const textColor =
    parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';

  return (
    <View style={[styles.bar, {backgroundColor: hexCode}]}>
      <Text style={{color: textColor}}>{`${colorName}: ${hexCode}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default ColorBar;
