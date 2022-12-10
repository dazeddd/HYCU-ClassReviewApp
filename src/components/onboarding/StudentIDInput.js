import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const StudentIDInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10, paddingTop: 30}}>
      <TextInput
        style={{height: 40, borderBottomColor: "black", borderBottomWidth: 1}}
        placeholder="학번을 입력하세요"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        
      />
      {/* <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text> */}
    </View>
  );
}

export default StudentIDInput