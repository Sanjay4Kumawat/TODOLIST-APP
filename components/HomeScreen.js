import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        
        {/*Today's Tasks*/}
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAD"        
    },
    tasksWrapper: {
        paddingTop:80,
        paddingHorizontal:20,
    },
    sectionTitle:{
        fontSize:24,
        fontWeight:"bold"
    }
})