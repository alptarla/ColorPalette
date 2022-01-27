import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import PalettePreview from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

function Home({navigation}) {
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

  const goToColorPalette = item => {
    navigation.navigate('ColorPalette', {palette: item});
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default Home;
