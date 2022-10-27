// https://www.hycu.ac.kr/content/05sub/style0001/images/common/mob/logo.png



import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 50,
  },
  
  logo: {
    width: 100,
    height: 40,
  },
  titleView: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  titleText: {
    fontSize: 20,
    color: 'floralwhite'
  }

});

const OnboardingLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.hycu.ac.kr/content/05sub/style0001/images/common/mob/logo.png',
        }}
      />
      <View style={styles.titleView}>
        <Text style={styles.titleText}> 강의평가</Text>
      </View>
    </View>
  );
}

export default OnboardingLogo;