import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Colors } from 'src/constants';
import { usePlaylist } from 'src/provider';
import { ITrack } from 'src/interfaces';
import { Item } from '../Playlist/Lists/Item';
import { ItemType } from 'src/interfaces/Playlist';
import { getState, play, skip, STATE_PLAYING } from 'react-native-track-player';
import { tracks } from '../../../data';
import ListItem from '../Playlist/Lists/ListItem';

const { width } = Dimensions.get('window');

interface ShowListProps {
  route: {
    params: {
      item: ItemType;
      index: number;
    };
  };
}

export default function ListByFilterScreen(props: ShowListProps) {
  const { playTrack } = usePlaylist();
  const [listData, setListData] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    let newData: ITrack[] = [];
    switch (props.route.params.index) {
      case 0:
        newData = tracks.filter(
          (itemChild) => itemChild.singerId === props.route.params.item.id,
        );
        break;
      case 1:
        newData = tracks.filter(
          (itemChild) => itemChild.albumId === props.route.params.item.id,
        );
        break;
      case 2:
        newData = tracks.filter(
          (itemChild) => itemChild.typeTracksId === props.route.params.item.id,
        );
        break;
      default:
        break;
    }
    setListData(newData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{props.route.params.item.title}</Text>
      </View>
      <ListItem data={listData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  header: {
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: Colors.black,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.white,
    textAlign: 'center',
  },
  horizontal: {
    height: '100%',
    flexDirection: 'row',
  },
  vertical: {
    width: width,
    height: '100%',
    overflow: 'hidden',
  },
});
