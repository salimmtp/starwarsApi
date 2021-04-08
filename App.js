import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import List from './src/screens/List';
import Routes from './src/routes';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
