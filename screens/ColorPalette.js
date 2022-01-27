import {Text, View} from 'react-native';
import React from 'react';

function ColorPalette({route}) {
  return (
    <View>
      <Text>Color palette screen of {route.params.palette.paletteName}</Text>
    </View>
  );
}

export default ColorPalette;
