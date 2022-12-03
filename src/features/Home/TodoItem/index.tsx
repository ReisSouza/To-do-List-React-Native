import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Alert, Image, Text, TouchableWithoutFeedback, View  } from 'react-native';
import S from './styles';
import { TasksType } from '../../../types/tasks';
        
type TodoItemProps = {
 data:TasksType;
 onChangeCheck:(id:boolean)=>void
 onRemove:(id:string)=> void
};
     
const TodoItem: React.FC<TodoItemProps> = ({data,onChangeCheck,onRemove}:TodoItemProps) => {
const [isChecked, setIsChecked] = useState<boolean>(false)
  return (
    <View style={S.containe}>
      <View style={S.wrappedText} >

      <Checkbox style={S.checkbox} value={data.isDone} onValueChange={(v)=> {
        setIsChecked(v)
        onChangeCheck(isChecked)
      }} onChange={()=>onChangeCheck(isChecked)} color={data.isDone ? '#C71861' : undefined}/>
        <Text>
        {data.title}
        </Text>
      </View>
  
      <TouchableWithoutFeedback onPress={()=> onRemove(data.id)}>
      <Image source={require('../../../../assets/trash.png')} />
     </TouchableWithoutFeedback>

     
    </View>
  );
};
export default TodoItem;