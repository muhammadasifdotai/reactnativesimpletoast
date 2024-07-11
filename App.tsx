import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-simple-toast';

const App = () => {
  const showToast = () => {
    Toast.show('This is a short toast');
  };

  const showLongToast = () => {
    Toast.show('This is a long toast.', Toast.LONG);
  };

  const showToastWithGravity = () => {
    Toast.showWithGravity(
      'This is a long toast at the top.',
      Toast.LONG,
      Toast.TOP,
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Show Short Toast" onPress={showToast} />
      <Button title="Show Long Toast" onPress={showLongToast} />
      <Button title="Show Toast with Gravity" onPress={showToastWithGravity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
