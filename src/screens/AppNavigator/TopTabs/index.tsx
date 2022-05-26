import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Playlist } from 'src/screens/Playlist';
import Personal from 'src/screens/Personal';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarContentContainerStyle: {
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen name="Discover" component={Playlist} />
      <Tab.Screen name="Personal" component={Personal} />
    </Tab.Navigator>
  );
}
