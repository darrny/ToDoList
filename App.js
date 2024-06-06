import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behaviour = {Platform.OS === 'ios' ? "paddinng" : "height"}
        style = {styles.writeTaskWrapper}
      >
        <TextInput style = {styles.input} placeholder = {'Write a task'} value = {task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress = {() => handleAddTask()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  items: {
    justifyContent:'space-between',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'grey',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  addText: {
  },
  writeTaskWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 60,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
