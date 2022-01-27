import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteForm from './screens/ColorPaletteForm';

const Stack = createNativeStackNavigator();

function App() {
  const selectPaletteName = item => item.route.params.palette.paletteName;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={item => ({title: selectPaletteName(item)})}
        />
        <Stack.Screen
          name="ColorPaletteForm"
          component={ColorPaletteForm}
          options={{title: 'New Color Palette'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
