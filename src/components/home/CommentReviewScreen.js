import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
       
    />
  );
}

const CommentReviewScreen = () => {
  
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderColor:'#000000',
        // borderEndWidth: 1,
        // borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={
            {padding: 10, height: 200}}
      />
    </View>
  );
}

export default CommentReviewScreen;