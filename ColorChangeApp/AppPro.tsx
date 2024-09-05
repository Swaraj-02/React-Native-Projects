import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme();
  const [color, setColor] = useState('#fff');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.blackText : styles.blackText}>
          This is my app & my device mode is - {isDarkMode}
        </Text>
        <Text style={{backgroundColor: color}}>Lorem ipsum dolor sit.</Text>
      </View>

      <Button
        title="Change Mode"
        color={color}
        onPress={() => setColor('#000')}
      />
      <Button
        title="Change Mode"
        color={color}
        onPress={() => setColor('red')}
      />
    </SafeAreaView>
  );
}

// -> create style in react native - CSS-IN-JS

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
});

export default AppPro;
