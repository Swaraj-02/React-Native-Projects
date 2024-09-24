import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {playListData} from '../constant/constant';

import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

// Dimension = use for dynamic style according to phone width and height
const {width} = Dimensions.get('window'); // dynamic width4

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  //- For automatically start a new music inital music
  // useTrackPlayerEvents(events, async event => {
  //   if (event.type === Event.PlaybackActiveTrackChanged) {
  //     const activeTrackIndex = event.index;

  //     const playingTrack = await TrackPlayer.getTrack(activeTrackIndex);
  //     setTrack(playingTrack);
  //   }

  // switch (event.type) {
  //   case Event.PlaybackActiveTrackChanged:
  //     const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
  //     setTrack(playingTrack);
  //     break;
  // }
  // });

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    if (event.type === Event.PlaybackActiveTrackChanged) {
      const activeTrackIndex = event.index;

      // Ensure that activeTrackIndex is a number and not undefined
      if (typeof activeTrackIndex === 'number') {
        const playingTrack = await TrackPlayer.getTrack(activeTrackIndex);
        setTrack(playingTrack); // Update your state with the new track
      }
    }
  });

  //- Render Artwork
  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{uri: track?.artwork?.toString()}}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />

      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

export default MusicPlayer;
