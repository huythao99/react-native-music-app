import * as React from 'react';
import { FlatList } from 'react-native';
import TrackPlayer, {
  getState,
  play,
  skip,
  STATE_PLAYING,
} from 'react-native-track-player';
import { Item } from './Item';

interface ListItemProps {
  data: any[];
}

export default function ListItem(props: ListItemProps) {
  const onPress = async (id: string) => {
    try {
      const newData: any[] = props.data.map((item) => ({
        ...item,
        id: String(item.id),
        url: item.source,
      }));

      await TrackPlayer.reset();
      await TrackPlayer.add(newData);
      const state = await getState();
      await skip(id);
      // If it can't be played, wait until it's ready and then play
      if (state !== STATE_PLAYING) {
        play();
        // let subscription = addEventListener('playback-state', (data) => {
        //   if (data.state === STATE_READY) {
        //     play();

        //     subscription.remove();
        //   }
        // });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FlatList
      data={props.data}
      renderItem={({ item, index }) => {
        return (
          <Item
            item={item}
            last={index === props.data.length - 1}
            onPressItem={onPress}
          />
        );
      }}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
