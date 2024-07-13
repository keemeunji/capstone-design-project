import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://192.168.0.236:8000/index.html' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    height: 500,
    width: 600,
  },
});

export default VideoScreen;