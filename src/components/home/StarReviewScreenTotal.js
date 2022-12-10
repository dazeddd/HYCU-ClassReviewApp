import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import StarRatingView  from "./StarRatingView.js";

function StarReviewScreenTotal() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StarRatingView title="총점"/>  
        </View>
    );
  }

export default StarReviewScreenTotal

// 항목

// 총점

// 평가 방식
// 실력 향상
// 강의 관련 안내