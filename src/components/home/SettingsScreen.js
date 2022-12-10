
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 10
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    
  },
});

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: '내 정보'},
          {key: '내가 작성한 리뷰'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default SettingsScreen;