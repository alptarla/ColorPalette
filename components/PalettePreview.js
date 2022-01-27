import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ColorBox from './ColorBox';

function PalettePreview({paletteName, colors, onPress}) {
  const colorBoxes = colors
    .slice(0, 5)
    .map((color, index) => <ColorBox bgColor={color.hexCode} key={index} />);

  return (
    <TouchableOpacity onPress={onPress} style={styles.palette}>
      <Text style={styles.paletteName}>{paletteName}</Text>
      <View style={styles.colorBoxes}>{colorBoxes}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  palette: {
    marginBottom: 20,
  },
  paletteName: {
    fontWeight: 'bold',
  },
  colorBoxes: {
    flexDirection: 'row',
  },
});

export default PalettePreview;
