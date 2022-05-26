import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Colors } from 'src/constants';
import { usePlaylist } from 'src/provider';
import { IPlaylist, ITrack } from 'src/interfaces';
import { Item } from '../Playlist/Lists/Item';

const { width } = Dimensions.get('window');

interface ShowListProps {
  route: {
    params: {
      items: Array<string>;
      title: string;
      index: number;
      indexList: number;
    };
  };
}

export default function ListByFilterScreen(props: ShowListProps) {
  const { tracks } = usePlaylist();
  const [listData, setListData] = React.useState<Array<ITrack>>([]);

  React.useEffect(() => {
    const newData = props.route.params.items.map((value: string | number) => {
      const indexOfItem = tracks.findIndex(
        (item: ITrack) => item.id === value.toString(),
      );
      return {
        ...tracks[indexOfItem],
      };
    });
    setListData(newData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{props.route.params.title}</Text>
      </View>
      <FlatList
        data={listData}
        renderItem={({ item, index }: { item: ITrack; index: number }) => {
          return (
            <Item
              item={item}
              last={index === listData.length - 1}
              playlistIndex={props.route.params.index}
              indexOfList={props.route.params.indexList + 1}
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
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
