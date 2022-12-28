import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useState } from 'react';
import { Alert, FlatList, Image, Text, View } from 'react-native';
import { HeaderHome, InforHome,TodoItem } from '../../features';
import { TasksType } from '../../types/tasks';

import S from './style';

type Action = {type:'added', text:string}| {type:'changed', task:TasksType} | {type:'deleted', id:string}

const initialTasks = ()=>{
  return [] as TasksType[]
};

const [state, setState] = useState<[]>([])


function tasksReducer(tasks:TasksType[], action:Action) {
  switch (action.type) {
    case 'added': {
     return [...tasks,{title: action.text ,
      isDone: false,
      id: (tasks.length+1)+''}]
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action:');
    }
  }
}

const Home: React.FC= () => {
  const [textValue, setTextValue] = useState<string| undefined>()
  const [isFilter, setIsFilter] = useState<boolean>(false)

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    [],
    initialTasks
  );

  const handleAddTask = () => {
    if(textValue === undefined){
      return Alert.alert('Titulo e obrigatorio', 'Defina uma nome para a tarefa')
    }
    if(tasks.some((task) => task.title === textValue)){
     return Alert.alert('Tarefa já existes', 'Já existe uma tarefa com esse nome adicione uma nova tarefa')
    }
    dispatch({type:'added', text:textValue})
    setTextValue(undefined)
  }

  const handleChangeTask = (task:TasksType) => {
    dispatch({type:'changed', task})
  }

  const handleDeleteTask = (id:string) => {
    dispatch({type:'deleted', id})
  }

 const taskIsDone = tasks.filter((item) => item.isDone === true)

  return (
    <View style={S.container}>
      <HeaderHome value={textValue} onChangeText={setTextValue} onPress={handleAddTask}/>
      <InforHome tasks={tasks} hasFilter={()=>setIsFilter(!isFilter)} isFilter={isFilter}/>
      <View style={S.wrappedList}>
      <FlatList 
      inverted={!isFilter}
      data={isFilter ? taskIsDone : tasks} 
      renderItem={({item})=> {
        return <TodoItem data={item} onRemove={handleDeleteTask} onChangeCheck={()=>{
          handleChangeTask({...item, isDone:!item.isDone})
        }}/>
      }}
      ListEmptyComponent={() => (
        <View style={S.wrappedNotFound}>
          <Image source={require('../../../assets/clipboard.png')} />
          <Text style={S.notFoundTitle}>
          Você ainda não tem tarefas cadastradas 
         </Text>
          <Text style={S.notFoundDescription}>
          Crie tarefas e organize seus itens a fazer
         </Text>
        </View>
      )}
      />
      </View>
    <StatusBar style="light"  translucent />
  </View>
  );
};
export default Home;