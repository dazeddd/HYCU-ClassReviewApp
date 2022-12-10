import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
// import StarRating from 'react-native-star-rating-widget';
import { Rating, AirbnbRating } from 'react-native-ratings'

const StarRatingView = (props) => {
  const [rating, setRating] = useState(0);


  return (
    <View style={styles.container} flexDirection='row' >
      <View style={styles.starRatingTitle}>
        <Text>{props.title}</Text>
      </View>
      <View style= {styles.startRating}>
        <AirbnbRating reviews={[]} />
      </View>
    </View>
  );
};



export default StarRatingView

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  startRating : {
    marginLeft: 20
  },
  starRatingTitle: {
    marginRight: 20,
    paddingTop: 30
  }
})