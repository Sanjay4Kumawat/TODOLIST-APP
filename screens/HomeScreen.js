import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
               return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                 <Task key={index} text={item}/>
                </TouchableOpacity>
               )
               
              })
            }
          </View>
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
    flex: 1, // Ensures it takes full height
  },
  container: {
    flex: 1,
    backgroundColor: "gray",
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
  },
  WriteTaskWrapper: {
   position:'absolute',
   bottom:30,
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
  addText:{

  }
  
});
