import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const StudentMajorInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10, paddingTop: 20}}>
      <TextInput
        style={{height: 40, borderBottomColor: "black", borderBottomWidth: 1}}
        placeholder="전공을 입력하세요"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        
      />
      {/* <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text> */}
    </View>
  );
}

export default StudentMajorInput