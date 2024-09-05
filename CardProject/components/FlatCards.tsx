import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.cardBlue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards, styles.cardGreen]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  cards: {
    width: 100,
    height: 100,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  cardRed: {
    backgroundColor: 'red',
  },
  cardBlue: {
    backgroundColor: 'blue',
  },
  cardGreen: {
    backgroundColor: 'green',
  },
});
