import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../colors';
import ColorSwitch from '../components/ColorSwitch';

function ColorPaletteForm({navigation}) {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const isSelected = colorName =>
    !!selectedColors.find(item => item.colorName === colorName);

  const handleSwitchedColor = (checked, item) => {
    if (checked) {
      setSelectedColors(prev => [...prev, item]);
    } else {
      setSelectedColors(prev =>
        prev.filter(c => c.colorName !== item.colorName),
      );
    }
  };

  const handleCreate = () => {
    if (!paletteName) {
      Alert.alert('Palette name is required!');
    } else if (selectedColors.length < 3) {
      Alert.alert('At least 3 colors must be selected!');
    } else {
      navigation.navigate('Home', {
        palette: {paletteName, colors: selectedColors},
      });
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.inputText}>Palette Name</Text>
      <TextInput
        style={styles.input}
        value={paletteName}
        onChangeText={setPaletteName}
        placeholder="Palette name..."
      />
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <View style={styles.colorList}>
        <FlatList
          data={colors}
          keyExtractor={item => item.colorName}
          renderItem={({item}) => (
            <ColorSwitch
              colorName={item.colorName}
              value={isSelected(item.colorName)}
              onValueChange={checked => handleSwitchedColor(checked, item)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 5,
    padding: 5,
  },
  inputText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorList: {
    marginTop: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ColorPaletteForm;
