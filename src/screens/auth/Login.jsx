import React, { useState } from 'react'
import { ActivityIndicator, Image, Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../../config/firebaseConfig'
import Button from '../../theme/Button'
import { colors } from '../../theme/colors'
import Text from '../../theme/Text'
import TextInput from '../../theme/TextInput'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login({ navigation }) {

  const [loading, setLoading] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })


  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password);
      if (result) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      FlashMessage("Failed to login...", "danger");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./../../../assets/note-app/working.png")}
        style={styles.loginImg}
      />

      <Text preset='h4' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: -30, marginBottom: 20 }}>Never Forget Your Notes</Text>
      <TextInput placeholder="Email Address" autoCapitalize="none" onChangeText={(text) => setLoginInfo({ ...loginInfo, email: text })} />
      <TextInput placeholder="Password" isPassword={true} onChangeText={(text) => setLoginInfo({ ...loginInfo, password: text })} />

      {loading ?
        <ActivityIndicator /> :
        <Button title="Login" customStyle={{ alignSelf: 'center', marginTop: 40 }} onPress={handleLogin} />
      }

      <View style={styles.bottomText}>
        <Pressable style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Register')}>
          <Text>
            Don't have an account?
          </Text>
          <Text style={{ color: colors.green }}>
            Sign Up
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
  loginImg: {
    alignSelf: 'center',
    resizeMode: "contain",
    marginTop: -10,
    width: "75%"
  },
  bottomText: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    alignItems: 'center',
  }
})