import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ColorBar from '../components/ColorBar';

function ColorPalette({route}) {
  const {colors} = route.params.palette;

  return (
    <FlatList
      style={styles.list}
      data={colors}
      keyExtractor={item => item.colorName}
      renderItem={({item}) => (
        <ColorBar hexCode={item.hexCode} colorName={item.colorName} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default ColorPalette;
