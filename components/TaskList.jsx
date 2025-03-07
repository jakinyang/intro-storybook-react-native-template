import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { Task } from './Task'
import { styles } from './styles'
import { LoadingRow } from './LoadingRow'
import { MaterialIcons } from '@expo/vector-icons'

export const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    }

    // Handle Loading
    if (loading) {
        return (
            <View style={styles.listItems}>
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
            </View>
        )
    }
    // Handle empty task list
    if (tasks.length === 0) {
        return (
          <View style={styles.listItems}>
            <View style={styles.wrapperMessage}>
              <MaterialIcons name="check" size={64} color={"#2cc5d2"} />
              <Text style={styles.titleMessage}>You have no tasks</Text>
              <Text style={styles.subtitleMessage}>Sit back and relax</Text>
            </View>
          </View>
        );
      }
    

    // Task List
    return (
        <View style={styles.listItems}>
            <FlatList 
                data={tasks}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) => (
                    <Task key={item.id} task={item} {...events} />
                )}
            />
        </View>
    )
}