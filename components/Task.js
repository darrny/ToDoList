import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} onPress={() => props.completeTask(props.index)}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'centre',
        marginBottom: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: '#E8EAED',
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 10,
        maxWidth: '80%',
    },
})