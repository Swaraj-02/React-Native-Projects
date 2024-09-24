import React, {useState, useEffect} from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

//- Services
import {setupPlayer, addTrack} from '../musicPlayerService';
import MusicPlayer from './screens/MusicPlayer';

const App = (): JSX.Element => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const setUp = async () => {
    //   let isSetup = await setupPlayer(); // values come from setupPlayer function

    //   // isSetup === True then add the track from addTrack ()
    //   if (isSetup) {
    //     await addTrack();
    //   }

    //   setIsPlayerReady(isSetup);

    try {
      let isSetup = await setupPlayer(); // values come from setupPlayer function

      // isSetup === True then add the track from addTrack ()
      if (isSetup) {
        await addTrack();
      }
      setIsPlayerReady(isSetup);
    } catch (error) {
      console.error('Error setting up player:', error);
    }
  };

  useEffect(() => {
    setUp();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        {/* -- Loader -- */}
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#001d23'} />
        <MusicPlayer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
