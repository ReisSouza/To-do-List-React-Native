import React from 'react';
import {TextInput, View} from 'react-native';
import { ButtonAction } from '../../components';


import S from './styles';
type TextFieldProps = {
  value?:string | undefined,
  onChangeText?: (text:string) => void;
  placeholder?:string;
  onPressAction?: () => void;
}
const TextField: React.FC<TextFieldProps> = ({
onChangeText,value,placeholder,onPressAction
}: TextFieldProps) => {
  return (
    <View style={S.form}>
      <TextInput
        style={S.input}
        placeholder={placeholder}
        placeholderTextColor="#6b6b6b"
        onChangeText={onChangeText}
        value={value}
      />
      <ButtonAction
        onPress={onPressAction ? () => onPressAction() : ()=>{}
        }
      />
    </View>
  );
};
export default TextField;
