import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Layout(props) {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <ScrollView>{props.children}</ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
});
