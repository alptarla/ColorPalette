import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
