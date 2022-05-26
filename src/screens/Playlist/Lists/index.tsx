import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  runOnJS,
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { ScrollView, PanGestureHandler } from 'react-native-gesture-handler';

import { IPlaylist, ITrack } from 'src/interfaces';
import { Colors } from 'src/constants';
import { usePlaylist } from 'src/provider';

import { CornerShadow } from './CornerShadow';
import { Item } from './Item';

const { width } = Dimensions.get('window');
const THRESHOLD = 300;

export const Lists = () => {
  const { lists, tracks, swipeIndex, setSwipeIndex } = usePlaylist();

  const translateX = useSharedValue(0);
  const currentIndex = useSharedValue(0);

  const count = lists.length - 1;
  const min = 0;
  const max = count * width * -1;

  useEffect(() => {
    if (currentIndex.value !== swipeIndex) {
      currentIndex.value = swipeIndex;

      const value = width * swipeIndex * -1;

      translateX.value = withTiming(value);
    }
  }, [swipeIndex]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <View style={styles.area}>
      <CornerShadow />
      <View style={styles.container}>
        {/* <PanGestureHandler onGestureEvent={gestureHandler}> */}
        <PanGestureHandler>
          <Animated.View
            style={[styles.horizontal, { width: width * lists.length }, style]}>
            {lists.map((playlist: IPlaylist, index: number) => {
              // const items = playlist.items
              //   .map((id: string) =>
              //     tracks.find((track: ITrack) => track.id === id),
              //   )
              //   .filter((track: ITrack | undefined) => track !== undefined);
              const items = tracks;
              return (
                <View key={index}>
                  <ScrollView style={styles.vertical}>
                    {items.map((item: ITrack | undefined, key: number) => (
                      <Item
                        key={key}
                        item={item}
                        last={key === items.length - 1}
                        playlistIndex={index}
                        indexOfList={0}
                      />
                    ))}
                  </ScrollView>
                </View>
              );
            })}
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    overflow: 'hidden',
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
