import React from 'react';
import { Image, View } from 'react-native';
import { TextField } from '../../../modules';
       
import S from './styles';

type HeaderHomeProps = {
  value: string | undefined;
  onChangeText: (value: string) => void
  onPress: () => void
};
     
const HeaderHome: React.FC<HeaderHomeProps> = ({onChangeText,value,onPress}:HeaderHomeProps) => {
        
  return (
      <View style={S.container}>
        <Image  source={require('../../../../assets/logo.png')} />
        <View style={S.wrappedTextField}>
         <TextField value={value} onChangeText={onChangeText} placeholder="Adicione uma nova tarefa" onPressAction={onPress}/>
        </View>
      </View>
  );
};
export default HeaderHome;