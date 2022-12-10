import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import StarReviewScreenTotal from "./StarReviewScreenTotal";
import CommentReviewScreen from "./CommentReviewScreen";

function ShowReview() {
    return (
        // <KeyboardAvoidingView
        //     style={styles.container}
        //     behavior={"padding"}
        // >
            //  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                // <KeyboardAwareScrollView style={{flex: 1}}>
                <ScrollView style={{flex: 1}}> 

                    <StarReviewScreenTotal />
                    <CommentReviewScreen />
                    
                </ScrollView>
                // </KeyboardAwareScrollView>

            //  </TouchableWithoutFeedback>

        // </KeyboardAvoidingView>
    );
  }

export default ShowReview

const styles = StyleSheet.create({
    container: {
      flex: 1
    }})