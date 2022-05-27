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
import { AddFolder } from 'src/icons/AddFolder';
import { IPlaylist } from 'src/interfaces';
import { RootStackParamList } from 'src/interfaces/RootStackParamList';
import { usePlayer, usePlaylist } from 'src/provider';
import { MINI_AREA_HEIGHT } from '../Player/Dimensions';
import { Item } from '../Playlist/Lists/Item';

type PersonalScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Personal'
>;

export default function Personal() {
  const { displayPlayer } = usePlayer();
  const { myPlayLists } = usePlaylist();
  const navigation = useNavigation<PersonalScreenProps>();

  const onPress = () => {
    navigation.navigate('CreateNewPlayList');
  };

  const onPressItem = (item) => {
    navigation.navigate('MyPlayListScreen', {
      data: item.items,
      title: item.title,
    });
  };

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: displayPlayer ? MINI_AREA_HEIGHT : 0 },
      ]}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Danh sách phát</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <AddFolder size={18} fill={'#000000'} />
          <Text style={styles.textButton}>Tạo danh sách mới</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        data={myPlayLists}
        renderItem={({ item }: { item: IPlaylist; index: number }) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => onPressItem(item)}>
              <Text style={styles.textBtn}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        numColumns={2}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Bạn chưa có danh sách nào</Text>
          </View>
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.white,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 4,
    paddingVertical: 5,
    backgroundColor: Colors.white,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.black,
    marginLeft: 8,
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
  flatlistContainer: {
    flexGrow: 1,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
