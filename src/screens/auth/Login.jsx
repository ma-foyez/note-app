import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../theme/Button'
import Text from '../../theme/Text'
import TextInput from '../../theme/TextInput'

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>

      <Image
        source={require("./../../../assets/note-app/working.png")}
        style={styles.loginImg}
      />
      <Text preset='h4' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: -20, marginBottom: 40 }}>Never Forget Your Notes</Text>
      <TextInput placeholder="Email Address" />
      <TextInput placeholder="Password" isPassword={true} />
      <Button title="Login" customStyle={{ alignSelf: 'center', marginTop: 40 }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  loginImg: {
    alignSelf: 'center',
    resizeMode: "contain",
    marginTop: -10,
    width: "75%"
  }
})