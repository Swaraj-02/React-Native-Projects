import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

import {playListData} from './src/constant/constant';

//- Musics are loaded and the curret status of the player services
export async function setupPlayer() {
  let isSetup = false;

  try {
    // await TrackPlayer.getCurrentTrack(); -@deprecated getCurrentTrack()
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

//- Add the Tracks of playListData
export async function addTrack() {
  await TrackPlayer.add(playListData);

  await TrackPlayer.setRepeatMode(RepeatMode.Queue); // Loop the musics
}

//- Playback Service
export async function playbackService() {
  //- Pause
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  //- Play
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  //- Next
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();

    //- Previous
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
      TrackPlayer.skipToPrevious();
    });
  });
}

//-> RemotePause, Play anything using remote is accesable from blutooth,wireless remote device IMP:
