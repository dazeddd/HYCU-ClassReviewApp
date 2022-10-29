import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentIDInput from "./StudentIDInput.js"
import StudentMajorInput from "./StudentMajorInput.js"
import OnboardingLogo from "./OnboardingLogo.js"
// import EntryButton from "./EntryButton.js"

const OnboardingView = ({navigation}) => {
  return (
    <View
      style={styles.container}
    >
      {/* <View style={{ backgroundColor: "blue", flex: 1 }} /> */}
      {/* <View style={{ backgroundColor: "red", flex: 1 }} /> */}
      <OnboardingLogo />
      <StudentIDInput />
      <StudentMajorInput />
      <View style={styles.button}>
        <Button
          title= '평가 시작'
          onPress={() => navigation.navigate('Main')}
          color='floralwhite'
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "column",
    // padding:50,
    // marginTop: 100,
    // marginLeft: 20,
    // marginRight: 20,
    },
  button: {
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: 'blue',
    borderRadius: 4
  }
});

export default OnboardingView;


  