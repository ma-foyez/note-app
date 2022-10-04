import { StyleSheet, TextInput as RNTextInput } from 'react-native'
import React from 'react'
import { colors } from './colors'

export default function TextInput({ placeholder, isPassword = false, customStyle, onChangeText, autoCapitalize }) {
    return (
        <RNTextInput
            style={[styles.input, customStyle]}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
        >

        </RNTextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        marginBottom: 20
    }
})