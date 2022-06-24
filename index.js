/**
 * @format
 */
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import { App } from './src';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => require('./service.js'));
