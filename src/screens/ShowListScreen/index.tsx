import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'src/constants';
import { RootStackParamList } from 'src/interfaces/RootStackParamList';
import { usePlaylist } from 'src/provider';

interface ShowListProps {
  route: {
    params: {
      index: number;
      title: string;
    };
  };
}

type ItemData = {
  id: string | number;
  title: string;
  items: Array<string>;
};

type ShowListScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'ShowListScreen'
>;

export default function ShowListScreen(props: ShowListProps) {
  const { listAlbum, listSinger, lists } = usePlaylist();
  const [listData, setListData] = React.useState<Array<ItemData>>([]);
  const navigation = useNavigation<ShowListScreenProps>();

  const onPress = (item: ItemData, index: number) => {
    navigation.navigate('ListByFilterScreen', {
      title: item.title,
      items: item.items,
      indexList: props.route.params.index,
      index: index,
    });
  };

  React.useEffect(() => {
    switch (props.route.params.index) {
      case 0:
        setListData(listSinger);
        break;
      case 1:
        setListData(listAlbum);
        break;
      case 2:
        setListData(lists);
        break;
      default:
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{props.route.params.title}</Text>
      </View>
      <FlatList
        data={listData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }: { item: ItemData; index: number }) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => onPress(item, index)}>
              <Text style={styles.textBtn}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        numColumns={2}
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
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.white,
  },
  btn: {
    width: 160,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.black,
    textAlign: 'center',
  },
});
