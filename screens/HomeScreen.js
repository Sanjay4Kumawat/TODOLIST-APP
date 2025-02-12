import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState} from "react";
import Task from "../components/Task";

const HomeScreen = () => {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = ()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <ScrollView style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <SafeAreaView style={styles.container} edges={['top']}>
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task key={index} text={item}/>
                    </TouchableOpacity>
                  </SafeAreaView>
                )
              })
            }
          </ScrollView>
        </View>
        {/* Write a task*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.WriteTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={()=> handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>

            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  scroll:{
    flex: 1,
    backgroundColor: "gray",
    marginBottom:15
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    marginBottom:120
  },
  WriteTaskWrapper: {
   position:'absolute',
   bottom:20,
   width: '100%',
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   padding:10
  },
  input:{
  paddingVertical:15,
  paddingHorizontal:20,
  marginHorizontal:15,
  backgroundColor:'#FFF',
  borderRadius:60,
  borderColor:'#C0C0C0',
  width:320
  },
  addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#FFF',
  marginHorizontal:15,
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center'
  },  
});
