import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import frameWork from '../resources/Framework';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          {frameWork.map((item, index) => (
            <View style={styles.cardElevated} key={index}>
              <Image source={{uri: item.image}} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.contentHeading}>{item.name}</Text>
                <Text style={styles.contentTitle}>{item.shortTitle}</Text>

                <Text style={styles.contentDesc}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
  },
  cardElevated: {
    margin: 8,
    borderRadius: 12,
    borderWidth: 1,
    height: 350,
    width: 350,
    backgroundColor: 'lightgreen',
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 8,
  },
  cardContent: {
    gap: 4,
    padding: 8,
  },
  contentHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  contentDesc: {},
});
