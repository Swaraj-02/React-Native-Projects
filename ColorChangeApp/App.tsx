import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomBgColor, setRandomBgColor] = useState('#FFFFFF');

  const generateBgColor = () => {
    const hexaRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexaRange[Math.floor(Math.random() * 16)];
    }
    setRandomBgColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBgColor} />
      <View style={[styles.container, {backgroundColor: randomBgColor}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BG Color Change APP</Text>
        </View>

        <View style={styles.colorContainer}>
          <Text style={styles.colorHexaVal} selectable>
            {randomBgColor}
          </Text>
          <Text>Copy into clipboard</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity onPress={generateBgColor}>
            <Text style={styles.pressBtn}>Press me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  colorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorHexaVal: {
    fontSize: 22,
    fontWeight: '400',
    color: '#000',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 32,
  },
  pressBtn: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'purple',
    borderRadius: 8,
    borderWidth: 0,
  },
});

export default App;
