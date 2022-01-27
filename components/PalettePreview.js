import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorBox from './ColorBox';

function PalettePreview({paletteName, colors}) {
  const colorBoxes = colors
    .slice(0, 5)
    .map((color, index) => <ColorBox bgColor={color.hexCode} key={index} />);

  return (
    <View style={styles.palette}>
      <Text style={styles.paletteName}>{paletteName}</Text>
      <View style={styles.colorBoxes}>{colorBoxes}</View>
    </View>
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
