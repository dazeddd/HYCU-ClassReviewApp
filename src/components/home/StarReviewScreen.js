import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import StarRatingView  from "./StarRatingView.js";

function StarReviewScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <StarRatingView title="총점"/>  
            <StarRatingView title="평가 방식이 적절"/>  
            <StarRatingView title="실력 향상에 도움"/>  
            <StarRatingView title="강의 관련 안내가 투명"/>  
        </View>
    );
  }

export default StarReviewScreen

// 항목

// 총점

// 평가 방식
// 실력 향상
// 강의 관련 안내