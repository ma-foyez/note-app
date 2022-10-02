import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../theme/Button'
import { colors } from '../../theme/colors'
import Text from '../../theme/Text'
import TextInput from '../../theme/TextInput'

export default function Register({ navigation }) {

    const genderOptions = ["Male", "Female"];
    const [gender, setGender] = useState("Male");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder="Full Name" />
            <TextInput placeholder="Age" />
            <View style={styles.selectGender}>
                <Text preset='h4'>Gender :</Text>
                {
                    genderOptions.map((option, index) => {
                        const selected = gender === option;
                        return (
                            <Pressable style={styles.radioContainer} key={index + 1} onPress={() => setGender(option)}>
                                <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                                    <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
                                </View>
                                <Text style={styles.radioText}>{option}</Text>
                            </Pressable>
                        )
                    })
                }
            </View>
            <TextInput placeholder="Email Address" />
            <TextInput placeholder="Password" isPassword={true} />
            <Button title="Register" customStyle={{ alignSelf: 'center', marginTop: 40 }} />

            <View style={styles.bottomText}>
                <Pressable style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Login')}>
                    <Text>
                        Already have an account?
                    </Text>
                    <Text style={{ color: colors.green }}>
                        Sign In
                    </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    },
    selectGender: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    outerCircle: {
        height: 25,
        width: 25,
        borderRadius: 15,
        borderWidth: 1,
        marginRight: 10,
        borderColor: "#cfcfcf",
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        height: 17,
        width: 17,
        borderRadius: 8.5,
        backgroundColor: colors.gray
    },
    selectedOuterCircle: {
        borderColor: colors.yellow
    },
    selectedInnerCircle: {
        backgroundColor: colors.yellow
    },
    bottomText: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 15,
        alignItems: 'center',
    }
})