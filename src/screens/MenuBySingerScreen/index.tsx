import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { listSinger, listAlbum, listTypeTracks, tracks } from '../../../data';
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
import { ItemType } from 'src/interfaces/Playlist';
import { usePlayer } from 'src/provider';
import { MINI_AREA_HEIGHT } from '../Player/Dimensions';

type MenuBySingerScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MenuBySingerScreen'
>;

export default function MenuBySingerScreen() {
  const { displayPlayer } = usePlayer();
  const navigation = useNavigation<MenuBySingerScreenProps>();

  const onPress = (item: ItemType) => {
    const data = tracks.filter((track) => track.singerId === item.id);
    navigation.navigate('ListByFilterScreen', {
      data,
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
        <Text style={styles.textHeader}>Ca sĩ</Text>
      </View>
      <FlatList
        data={listSinger}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }: { item: ItemType; index: number }) => {
          return (
            <TouchableOpacity style={styles.btn} onPress={() => onPress(item)}>
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
