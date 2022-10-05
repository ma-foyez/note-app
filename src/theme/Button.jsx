import {  StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from './colors'
import Text from './Text'

export default function Button({ title, onPress, customStyle }) {
    return (
        <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        height: 45,
        width: 165,
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: colors.white,
    }
})