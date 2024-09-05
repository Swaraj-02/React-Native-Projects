import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ExploreCard from './components/ExploreCard';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ExploreCard />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
