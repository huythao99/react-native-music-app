import React, { useState, useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';

import { IPlaylist, ITrack } from 'src/interfaces';

import { Context } from './Context';

export { usePlaylist } from './Context';

interface Props {
  children: React.ReactNode;
}

export const PlaylistProvider: React.FC<Props> = ({ children }: Props) => {
  const [active, setActive] = useState<number>(0);
  const [lists, setLists] = useState<IPlaylist[]>([]);
  const [listAllTrack, setListAllTrack] = useState<IPlaylist[]>([]);
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [listSinger, setListSinger] = useState<IPlaylist[]>([]);
  const [listAlbum, setListAlbum] = useState<IPlaylist[]>([]);
  const [swipeIndex, setSwipeIndex] = useState<number>(0);
  const [indexOfList, setIndexOfList] = useState<number>(0);
  const [timeToStop, setTimeToStop] = useState<number>(0);

  useEffect(() => {
    updateTrackPlayer(active, indexOfList);
  }, [tracks, active, indexOfList]);

  const updateTrackPlayer = async (current: number, indexList: number) => {
    let currentData = [];
    switch (indexList) {
      case 0:
        currentData = [...listAllTrack];
        break;
      case 1:
        currentData = [...listSinger];
        break;
      case 2:
        currentData = [...listAlbum];
        break;
      case 3:
        currentData = [...lists];
        break;

      default:
        break;
    }
    setActive(current);
    if (tracks.length && currentData.length) {
      // simulate sql databases
      // find items in active playlist
      const activeTracks = currentData[current].items.map((id: string) =>
        tracks.find((track: ITrack) => track.id === id),
      );
      await TrackPlayer.reset();

      // @ts-ignore
      await TrackPlayer.add(activeTracks).then(function () {});
    }
  };

  return (
    <Context.Provider
      value={{
        active,
        lists,
        listAllTrack,
        tracks,
        listAlbum,
        listSinger,
        swipeIndex,
        indexOfList,
        timeToStop,
        setTimeToStop,
        setIndexOfList,
        setActive,
        setLists,
        setListAllTrack,
        setTracks,
        setListAlbum,
        setListSinger,
        setSwipeIndex,
        updateTrackPlayer,
      }}>
      {children}
    </Context.Provider>
  );
};
