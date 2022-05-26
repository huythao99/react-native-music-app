import { ItemType } from './Playlist';

export type RootStackParamList = {
  TopTabs: undefined;
  ShowListScreen: {
    index: number;
    title: string;
  };
  ListByFilterScreen: {
    item: ItemType;
    index: number;
  };
  Personal: undefined;
  CreateNewPlayList: undefined;
};
