import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';

import Navigator from './navigation/Navigator';

enableScreens();

const loadFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)} onError={(err) => console.log(err)} />;
  }
  return <Navigator />;
}

const styles = StyleSheet.create({
});
