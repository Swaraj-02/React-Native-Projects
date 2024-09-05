import React from 'react';

import {ScrollView, View, Text, StyleSheet} from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        {/* <View style={styles.container}> */}
        <View style={[styles.card, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>see</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>😊</Text>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#000',
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'pink',
  },
});
