import { createContext, useContext } from 'react';
import { IPlaylist, ITrack } from 'src/interfaces';

export type ContextType = {
  active: number;
  lists: IPlaylist[];
  listSinger: IPlaylist[];
  listAlbum: IPlaylist[];
  listAllTrack: IPlaylist[];
  indexOfList: number;
  tracks: ITrack[];
  swipeIndex: number;
  timeToStop: number;

  setLists: (lists: IPlaylist[]) => void;
  setListAllTrack: (lists: IPlaylist[]) => void;
  setTracks: (lists: ITrack[]) => void;
  setListSinger: (lists: IPlaylist[]) => void;
  setListAlbum: (lists: IPlaylist[]) => void;
  setIndexOfList: (active: number) => void;
  setActive: (active: number) => void;
  setSwipeIndex: (swipeIndex: number) => void;
  setTimeToStop: (time: number) => void;
  updateTrackPlayer: (current: number, indexOfList: number) => Promise<void>;
};

export const Context = createContext<ContextType>({} as ContextType);

export const usePlaylist = () => {
  const context = useContext(Context);

  return context;
};
