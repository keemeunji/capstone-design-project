import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const ChildGenderInput = ({ value, onValueChange }) => {
  const [gender, setGender] = useState(value);

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    onValueChange(newGender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>성별</Text>
      <View style={styles.radioButtonGroup}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => handleGenderChange('남자')}
            color="#000000"
          />
          <Text style={styles.radioButtonLabel}>남자</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => handleGenderChange('여자')}
            color="#007AFF"
          />
          <Text style={styles.radioButtonLabel}>여자</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 16,
  },
  radioButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  radioButtonLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
});

export default ChildGenderInput;


// import React, { useState } from 'react';
// import { View, Text, TextInput } from 'react-native';
// import COLORS from '../constants/colors';
// import { styles } from '../styles/stringInputStyles';

// const ChildGenderInput = ({ value, onChangeText }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>아이의 성별</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="아이의 성별을 입력하세요."
//           placeholderTextColor={COLORS.gray}
//           secureTextEntry={false}
//           style={styles.input}
//           keyboardType="default"
//           value={value}
//           onChangeText={onChangeText}
//         />
//       </View>
//     </View>
//   );
// };

// export default ChildGenderInput;

