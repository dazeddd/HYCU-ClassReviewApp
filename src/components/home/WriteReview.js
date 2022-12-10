import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import StarReviewScreen from "./StarReviewScreen";
import CommentReviewScreen from "./CommentReviewScreen";

<TouchableWithoutFeedback onPress={Keyboard.dismiss}></TouchableWithoutFeedback>

function WriteReview() {
    return (
        // <KeyboardAvoidingView
        //     style={styles.container}
        //     behavior={"padding"}
        // >
            //  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAwareScrollView style={{flex: 1}}>
                {/* <ScrollView style={{flex: 1}}> */}

                    <StarReviewScreen />
                    <CommentReviewScreen value='hello'/>
                    <CommentReviewScreen />
                {/* </ScrollView> */}
                </KeyboardAwareScrollView>

            //  </TouchableWithoutFeedback>

        // </KeyboardAvoidingView>
    );
  }

export default WriteReview

const styles = StyleSheet.create({
    container: {
      flex: 1
    }})