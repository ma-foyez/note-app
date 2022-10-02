import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../theme/Button'
import { colors } from '../../theme/colors'
import Text from '../../theme/Text'
import TextInput from '../../theme/TextInput'

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image
        source={require("./../../../assets/note-app/working.png")}
        style={styles.loginImg}
      /> */}

      {/* <Text preset='h4' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: -30, marginBottom: 20 }}>Never Forget Your Notes</Text> */}
      <TextInput placeholder="Full Name" />
      <TextInput placeholder="Age" />
      <TextInput placeholder="Email Address" />
      <TextInput placeholder="Password" isPassword={true} />
      <Button title="Register" customStyle={{ alignSelf: 'center', marginTop: 40 }} />

      <View style={styles.bottomText}>
        <Pressable style={{ flexDirection: 'row' }} onPress={()=> navigation.navigate('Login')}>
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