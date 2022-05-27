/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'src/constants';
import { usePlayer } from 'src/provider';
import { MINI_AREA_HEIGHT } from '../Player/Dimensions';
import ListItem from '../Playlist/Lists/ListItem';

const { width } = Dimensions.get('window');

interface ListByFilterProps {
  route: {
    params: {
      data: Array<any>;
      title: string;
    };
  };
}

export default function ListByFilterScreen(props: ListByFilterProps) {
  const { displayPlayer } = usePlayer();
  return (
    <View
      style={[
        styles.container,
        { paddingBottom: displayPlayer ? MINI_AREA_HEIGHT : 0 },
      ]}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{props.route.params.title}</Text>
      </View>
      <ListItem data={props.route.params.data} />
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
