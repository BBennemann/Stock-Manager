import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './views/Home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
