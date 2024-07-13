import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ImageButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={require('../assets/images/chick.png')} />
  </TouchableOpacity>
);

export default ImageButton;