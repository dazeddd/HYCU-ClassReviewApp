import React from "react";
import { View, Text } from "react-native";
import StudentIDInput from "./StudentIDInput.js"
import StudentMajorInput from "./StudentMajorInput.js"
import OnboardingLogo from "./OnboardingLogo.js"

const OnboardingView = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        // padding:50,
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        flex: 1
      }}
    >
      {/* <View style={{ backgroundColor: "blue", flex: 1 }} /> */}
      {/* <View style={{ backgroundColor: "red", flex: 1 }} /> */}
      <OnboardingLogo />
      <StudentIDInput />
      <StudentMajorInput />

    </View>
  );
};

export default OnboardingView;