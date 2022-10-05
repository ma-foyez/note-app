import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../theme/colors';
import Text from '../../theme/Text';

export default function RadioInput({ label, value, setValue, size = 'small' }) {
    const isSelected = value === label;
    return (
        <TouchableOpacity onPress={() => setValue(label)}>
            <View style={styles.container}>
                <View style={[styles.outerCircle, isSelected && styles.selectedOuterCircle, size === 'big' && styles.bigOuterCircle]}>
                    <View style={[styles.innerCircle, isSelected && styles.selectedInnerCircle, size === 'big' && styles.bigInnerCircle]} />
                </View>
                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    outerCircle: {
        height: 18,
        width: 18,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray,
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.gray,
    },
    bigOuterCircle: {
        height: 25,
        width: 25,
        borderRadius: 15,
    },
    bigInnerCircle: {
        height: 16,
        width: 16,
        borderRadius: 8,
    },
    selectedOuterCircle: {
        borderColor: colors.yellow,
    },
    selectedInnerCircle: {
        borderColor: colors.yellow,
        backgroundColor: colors.yellow,
    },
});