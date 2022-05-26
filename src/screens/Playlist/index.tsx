import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import {
  tracks,
  playlists,
  listSinger,
  listAlbum,
  listAllTrack,
} from '../../../data';

import { Colors } from 'src/constants';
import { usePlayer, usePlaylist } from 'src/provider';

import { MINI_AREA_HEIGHT } from '../Player/Dimensions';

import { Header } from './Header';
import { Lists } from './Lists';
import { pause } from 'react-native-track-player';
import BackgroundTimer from 'react-native-background-timer';

export const Playlist = () => {
  const {
    setLists,
    setTracks,
    setListAlbum,
    setListSinger,
    setListAllTrack,
    timeToStop,
    setTimeToStop,
  } = usePlaylist();

  const { setPlaying } = usePlayer();
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setLists(playlists);
    setTracks(
      tracks
        .map((item) => ({
          ...item,
          id: String(item.id),
          url: item.source,
        }))
        .sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLocaleLowerCase()),
        ),
    );
    setListSinger(listSinger);
    setListAlbum(listAlbum);
    setListAllTrack(listAllTrack);
  }, []);

  useEffect(() => {
    if (timeToStop !== 0) {
      let newTimer = timer;
      if (newTimer) {
        clearTimeout(newTimer);
      }
      newTimer = setTimeout(() => {
        pause();
        setPlaying(false);
        setTimeToStop(0);
      }, timeToStop);
      BackgroundTimer.runBackgroundTimer(() => {
        pause();
        setPlaying(false);
        setTimeToStop(0);
        BackgroundTimer.stopBackgroundTimer();
      }, timeToStop);
      setTimer(newTimer);
    } else {
      let newTimer = timer;
      clearTimeout(newTimer);
      setTimer(newTimer);
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [timeToStop]);

  return (
    <View style={styles.container}>
      <Header />
      <Lists />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 0,
    paddingBottom: MINI_AREA_HEIGHT,
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
