import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/interfaces/RootStackParamList';
import TopTabs from './TopTabs';
import ListByFilterScreen from '../ListByFilterScreen';
import CreateNewPlayList from '../CreateNewPlayList';
import MenuBySingerScreen from '../MenuBySingerScreen';
import MenuByAlbumScreen from '../MenuByAlbumScreen';
import MenuByTypeScreen from '../MenuByTypeScreen';
import MyPlayListScreen from '../MyPlayLists';
import PlayListScreen from '../PlayListScreen/PlayListScreen';
import CreatePlayListScreen from '../PlayListScreen/CreatePlayListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}>
        <Stack.Screen name={'TopTabs'} component={TopTabs} />
        <Stack.Screen
          name={'MenuBySingerScreen'}
          component={MenuBySingerScreen}
        />
        <Stack.Screen
          name={'MenuByAlbumScreen'}
          component={MenuByAlbumScreen}
        />
        <Stack.Screen name={'MenuByTypeScreen'} component={MenuByTypeScreen} />
        <Stack.Screen
          name={'ListByFilterScreen'}
          component={ListByFilterScreen}
        />
        <Stack.Screen
          name={'CreateNewPlayList'}
          component={CreateNewPlayList}
        />
        <Stack.Screen name={'MyPlayListScreen'} component={MyPlayListScreen} />
        <Stack.Screen name={'PlayListScreen'} component={PlayListScreen} />
        <Stack.Screen
          name={'CreatePlayListScreen'}
          component={CreatePlayListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
