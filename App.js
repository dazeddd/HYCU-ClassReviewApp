import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingView from './src/components/onboarding/OnboardingView.js'
import MainNavigator from './src/components/onboarding/MainNavigator.js';

export default function App() {
  return (
    // <View style={styles.container}>
      <MainNavigator />
    // </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
