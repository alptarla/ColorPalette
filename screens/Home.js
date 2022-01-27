import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import PalettePreview from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

function Home({navigation, route}) {
  const [loading, setLoading] = useState(false);
  const [colorPalettes, setColorPalettes] = useState([]);

  useEffect(() => {
    const fetchColorPalettes = async () => {
      setLoading(true);

      try {
        const res = await fetch(URL);
        const data = await res.json();
        setColorPalettes(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchColorPalettes();
  }, []);

  const newPalette = route.params?.palette;
  useEffect(() => {
    if (newPalette) {
      setColorPalettes(prev => [...prev, newPalette]);
    }
  }, [newPalette]);

  const goToColorPalette = item => {
    navigation.navigate('ColorPalette', {palette: item});
  };

  const goToColorPaletteForm = () => {
    navigation.navigate('ColorPaletteForm');
  };

  return (
    <View>
      <TouchableOpacity onPress={goToColorPaletteForm} style={styles.button}>
        <Text style={styles.buttonText}>New Palette</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => (
          <PalettePreview
            colors={item.colors}
            paletteName={item.paletteName}
            onPress={() => goToColorPalette(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  button: {
    width: 150,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 5,
  },
  buttonText: {
    color: 'teal',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
