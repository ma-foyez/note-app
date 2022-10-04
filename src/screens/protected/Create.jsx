import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, View } from 'react-native'
import Text from '../../theme/Text'
import TextInput from '../../theme/TextInput'
import RadioInput from '../../components/common/RadioInput'

export default function Create() {
  
  const themesOption = ['red', "green", 'blue'];
  const [noteColor, setNoteColor] = React.useState('white');
  const [note, setNote] = useState({
    title: "",
    description: "",
    theme: ""
  })

  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Title" onChangeText={(text) => setNote({ ...note, title: text })} />
      <TextInput placeholder="Description" multiline={true} onChangeText={(text) => setNote({ ...note, description: text })} />
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 15, fontSize: 18 }}>
          Select your note color
        </Text>
        {themesOption.map((option, index) => (
          <RadioInput
            key={index}
            label={option}
            value={noteColor}
            setValue={setNoteColor}
            size="big"
          />
        ))}
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})