import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native';
import { ScrollView } from 'react-native';

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
        <Text style={styles.sectionTitle}>Tasks</Text>
        <ScrollView contentContainerStyle={{ flexGrow: 0.75 }}>
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} completeTask={completeTask} index={index} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "paddinng" : "height"}
        style={[styles.writeTaskWrapper, { zIndex: 1000, elevation: 5 }]}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
  
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
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
    paddingBottom: 150,
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
    justifyContent: 'space-between',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 290,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 0,
    borderColor: 'grey',
    elevation: 5,  // Adding elevation to input bar
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    elevation: 5,  // Adding elevation to add button
  },
  addText: {
  },
  writeTaskWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,  // Increased elevation to create a more noticeable shadow
    shadowColor: '#000',  // Black shadow
    shadowOffset: { width: 0, height: 2 },  // Horizontal and vertical offset
    shadowOpacity: 0.5,  // Opacity of the shadow
    shadowRadius: 3.84,  // Softens the shadow
  },
});