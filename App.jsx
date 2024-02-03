import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const App = () => {
  
  StatusBar.setHidden(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello WALKER.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
