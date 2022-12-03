import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { TasksType } from '../../../types/tasks';
       
import S from './styles';
        
type InforProps = {
  tasks:TasksType[];
  isFilter:boolean;
  hasFilter:()=> void
};
     
const InforHome: React.FC<InforProps> = ({tasks,hasFilter,isFilter=false}:InforProps) => {
        
  return (
     <View style={S.container}>
      <View style={S.flex} >
       <Text style={S.taskText}>
        Criadas: 
      </Text>
      <Text style={S.Number}>{tasks.length}</Text>
      </View>
       <TouchableWithoutFeedback onPress={()=> hasFilter()}>
      <View style={S.flex}>
      <Text style={S.isDoneText}>
        {
        isFilter ? "Total" : 'Concluidas:' 
        }
      </Text>
      <Text style={S.Number}>
      {tasks.filter((task)=> task.isDone === true).length}
      </Text>
      </View>
       </TouchableWithoutFeedback>
     </View>
  );
};
export default InforHome;