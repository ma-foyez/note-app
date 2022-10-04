import React, { useState } from 'react'
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth, db } from '../../config/firebaseConfig'
import Button from '../../theme/Button'
import { colors } from '../../theme/colors'
import Text from '../../theme/Text'
import TextInput from '../../theme/TextInput'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs, doc, onSnapshot, query, where } from 'firebase/firestore'
import { FlashMessage } from '../../components/common/FlashMessage'

export default function Register({ navigation }) {

    const genderOptions = ["Male", "Female"];

    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: "",
        age: "",
        gender: "Male",
        email: "",
        password: ""
    })


    const handleRegister = async () => {
        setLoading(true)
        try {
            
            let collectionRef = collection(db, "users")
            const result = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
            setLoading(false)
            await addDoc(collectionRef, {
                name: userInfo.name,
                email: userInfo.email,
                age: userInfo.age,
                gender: userInfo.gender,
                uid: result.user.uid
            })


        } catch (error) {
            setLoading(false)
            FlashMessage(error.message, "danger");
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder="Full Name" onChangeText={(text) => setUserInfo({ ...userInfo, name: text })} />
            <TextInput placeholder="Age" onChangeText={(text) => setUserInfo({ ...userInfo, age: text })} />
            <View style={styles.selectGender}>
                <Text preset='h4'>Gender :</Text>
                {
                    genderOptions.map((option, index) => {
                        const selected = userInfo.gender === option;
                        return (
                            <Pressable style={styles.radioContainer} key={index + 1} onPress={() => setUserInfo({ ...userInfo, gender: option })}>
                                <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                                    <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
                                </View>
                                <Text style={styles.radioText}>{option}</Text>
                            </Pressable>
                        )
                    })
                }
            </View>
            <TextInput placeholder="Email Address" autoCapitalize="none" onChangeText={(text) => setUserInfo({ ...userInfo, email: text })} />
            <TextInput placeholder="Password" isPassword={true} onChangeText={(text) => setUserInfo({ ...userInfo, password: text })} />

            {loading ?
                <ActivityIndicator /> :
                <Button title="Register" customStyle={{ alignSelf: 'center', marginTop: 40 }} onPress={handleRegister} />
            }

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