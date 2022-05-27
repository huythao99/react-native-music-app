import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'src/components';
import { Colors } from 'src/constants';
import { ITrack } from 'src/interfaces';

interface Props {
  item: ITrack;
  last: boolean;
  onPressItem: (id: string) => void;
}

export const Item: React.FC<Props> = ({ item, last, onPressItem }: Props) => {
  const { id, title, artwork, artist, duration } = item;

  const onPress = async () => {
    onPressItem(id);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.artworkContainer}>
        {artwork ? <FastImage source={artwork} style={styles.artwork} /> : null}

        <View style={styles.artworkInlineBorder}>
          <View style={styles.artworkPoint} />
        </View>
      </View>

      <View style={[styles.content, last && { borderBottomWidth: 0 }]}>
        <View style={styles.information}>
          <Text color="#212121" size={16}>
            {title}
          </Text>

          <View style={styles.artist}>
            <Text
              color="#757575"
              numberOfLines={1}
              ellipsizeMode="tail"
              size={14}>
              {artist}
            </Text>
          </View>
        </View>

        <View style={styles.time}>
          <Text color={'#212121'} size={16}>
            {duration}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderBottomColor: '#757575',
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
});
