import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';

import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  //- Next Button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  //- Previous Button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  //- Play/Pause Buton

  //   //- 1st check current track is null or not if not nul then check playback music state paused or react to play then it will play if both not then it will show pause icon IMP:

  //TODO: control
  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();

    if (currentTrack !== null) {
      // const playbackState = await TrackPlayer.getActiveTrack();
      const playbackState = await TrackPlayer.getState();

      console.log('Play --', playBackState);

      if (playbackState === State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    }
  };

  console.log(playBackState);

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={togglePlayback}>
        <Icon
          style={styles.icon}
          name={playBackState.state === 'playing' ? 'pause' : 'play-arrow'}
          size={75}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});

export default ControlCenter;
