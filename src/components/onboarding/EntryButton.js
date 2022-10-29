import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

// const Separator = () => (
//   <View style={styles.separator} />
// );

const EntryButton = () => (
//   <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Button
        style = {styles.button}
        title= '평가 시작'
        onPress={() => Alert.alert("beep")}
        color='floralwhite'
      />
    </View>
//   </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: 'blue',
    borderRadius: 4
  }
});

export default EntryButton;