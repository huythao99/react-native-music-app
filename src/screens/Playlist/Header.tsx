import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Colors } from 'src/constants';
import { RootStackParamList } from 'src/interfaces/RootStackParamList';

type HeaderProps = NativeStackNavigationProp<RootStackParamList, 'TopTabs'>;

export const Header = () => {
  const navigation = useNavigation<HeaderProps>();

  const onPress = (index: number, title: string) => {
    navigation.navigate('ShowListScreen', {
      index,
      title,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onPress(0, 'Ca sĩ')}>
          <Text style={styles.textBtn}>Ca sĩ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onPress(1, 'Album')}>
          <Text style={styles.textBtn}>Album</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onPress(2, 'Thể loại')}>
          <Text style={styles.textBtn}>Thể loại</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: Colors.white,
    marginRight: 16,
  },
  textBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
