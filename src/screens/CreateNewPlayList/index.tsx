import { tracks } from '../../../data';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors } from 'src/constants';
import { ITrack } from 'src/interfaces';

export default function CreateNewPlayList() {
  const inputRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Tạo danh sách của bạn</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nhập tên danh sách của bạn"
          ref={inputRef}
          style={styles.input}
        />
      </View>
      <FlatList
        data={tracks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }: { item: any; index: number }) => {
          return (
            <TouchableOpacity style={styles.itemContainer}>
              <View style={styles.artworkContainer}>
                {item.artwork ? (
                  <FastImage source={item.artwork} style={styles.artwork} />
                ) : null}

                <View style={styles.artworkInlineBorder}>
                  <View style={styles.artworkPoint} />
                </View>
              </View>

              <View
                style={[
                  styles.content,
                  index === tracks.length - 1 && { borderBottomWidth: 0 },
                ]}>
                <View style={styles.information}>
                  <Text style={styles.itemTitle}>{item.title}</Text>

                  <View style={styles.artist}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.itemArtist}>
                      {item.artist}
                    </Text>
                  </View>
                </View>

                <View style={styles.time}>
                  <Text style={styles.itemDuration}>{item.duration}</Text>
                </View>
                <View style={styles.options} />
              </View>
            </TouchableOpacity>
          );
        }}
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
  inputContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: 'normal',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#AEAEAE',
    color: Colors.white,
  },
  itemContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  artworkContainer: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },

  artwork: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },

  artworkInlineBorder: {
    width: 47,
    height: 47,
    borderRadius: 47 / 2,
    borderColor: Colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  artworkPoint: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    borderColor: Colors.primary,
    borderWidth: 2,
    backgroundColor: Colors.black,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.mute,
    marginLeft: 20,
    paddingVertical: 10,
  },

  information: {
    flex: 1,
    paddingRight: 10,
  },

  artist: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  time: {
    minWidth: 50,
    alignItems: 'flex-end',
  },

  options: {
    minWidth: 50,
    alignItems: 'flex-end',
  },

  itemTitle: {
    fontSize: 16,
    color: Colors.white,
  },

  itemArtist: {
    fontSize: 15,
    color: Colors.white,
  },

  itemDuration: {
    fontSize: 16,
    color: Colors.mute,
  },
});
