import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'

export const Task = ({
    task: { id, title, state },
    onArchiveTask,
    onPinTask
}) => {
    return (
        <View style={styles.listItem}>
            {/* Archive Button */}
            <TouchableOpacity onPress={() => onArchiveTask(id)}>
                {state === "TASK_ARCHIVED"
                    ? (<MaterialIcons
                        name='check-box'
                        size={24}
                        color={0x26c6da}
                    />
                    )
                    : (<MaterialIcons
                        name='check-box-outline-blank'
                        size={24}
                        color={0x26c6da}
                    />)}
            </TouchableOpacity>
            {/* Text */}
            <TextInput
                placeholder='Input Title'
                value={title}
                editable={false}
                style={
                    state === "TASK_ARCHIVED"
                    ? styles.listItemInputTaskArchived
                    : styles.listItemInputTask
                }
            />

            {/* Pin Button */}
            <TouchableOpacity onPress={() => onPinTask(id)}>
                <MaterialIcons
                    name='star'
                    size={24}
                    color={
                        state === "TASK_PINNED"
                            ? 0x26c6da
                            : 0xEEEEEE
                    }
                />
            </TouchableOpacity>
        </View>
    )
}