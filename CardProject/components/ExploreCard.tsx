import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const ExploreCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Explore Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>WHat's new in React 18 </Text>
        </View>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, qui? Dicta ratione, voluptatibus iure, nihil sit enim
            sequi iusto eum ipsum praesentium saepe unde facilis reprehenderit?
            Fuga id a, ea dignissimos dolore totam, deserunt esse corrupti
            voluptates provident repellat perspiciatis?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text
              style={styles.socialLink}
              onPress={() =>
                openWebsite('https://reactnative.dev/docs/linking#openurl')
              }>
              Read More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.socialLink}
              onPress={() =>
                openWebsite('https://www.linkedin.com/in/swaraj-dash/')
              }>
              Follow Me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#000',
  },
  card: {
    margin: 6,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    width: 350,
    height: 380,
  },
  elevatedCard: {},
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    marginVertical: 10,
    paddingLeft: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    backgroundColor: 'lightblue',
    borderRadius: 6,
  },
});
