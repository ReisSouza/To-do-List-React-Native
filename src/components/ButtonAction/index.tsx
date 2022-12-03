import React from 'react';
import {Image,  TouchableOpacity} from 'react-native';

import S from './styles';

type ButtonProps = {
  onPress?: () => void;
};

const ButtonAction: React.FC<ButtonProps> = ({
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={S.default}
      onPress={onPress}>
      <Image  source={require('../../../assets/add.png')} />
    </TouchableOpacity>
  );
};
export default ButtonAction;
