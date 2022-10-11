import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'
import Text from '../../theme/Text'
import TextInput from '../../theme/TextInput'
import RadioInput from '../../components/common/RadioInput'
import Button from '../../theme/Button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'
import { FlashMessage } from '../../components/common/FlashMessage'

export default function Create({ user, navigation, route }) {

  const themesOption = [
    { label: "Red", value: "#de0f04" },
    { label: "Blue", value: "#007a8c" },
    { label: "Green", value: "#06b864" },
    { label: "Orange", value: "#ff6a19" },
    { label: "Light Red", value: "#f0055f" },
    { label: "Violet", value: "#7f0ee3" },
  ];
  const [loading, setLoading] = useState(false)
  const [note, setNote] = useState({
    title: "",
    description: "",
    theme: ""
  })

  const handleSubmitNote = async () => {

    if(note.title === ""){
      FlashMessage("Title can't be blank!", "danger");
      return false;
    }
    if(note.description === ""){
      FlashMessage("Description can't be blank!", "danger");
      return false;
    }
    if(note.theme === ""){
      FlashMessage("Please select theme...", "danger");
      return false;
    }
    let collectionRef = collection(db, "notes");
    setLoading(true);
    try {
      await addDoc(collectionRef, {
        uid: user.uid,
        title: note.title,
        description: note.description,
        theme: note.theme,
      })
      setLoading(false);
      navigation.goBack();
      FlashMessage("New note created successfully...", "success");
    } catch (err) {
      console.log('err', err);
      setLoading(false);
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TextInput placeholder="Title" onChangeText={(text) => setNote({ ...note, title: text })} />
        <TextInput placeholder="Description" multiline={true} onChangeText={(text) => setNote({ ...note, description: text })} />
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 15, fontSize: 18 }}>
            Select your note color
          </Text>
          {themesOption.map((option, index) => (
            <RadioInput
              key={index}
              option={option}
              value={note}
              setValue={setNote}
              size="small"
            />
          ))}
        </View>
        {loading ?
          <ActivityIndicator /> :
          <Button title="Register" customStyle={{ alignSelf: 'center', marginTop: 40 }} onPress={handleSubmitNote} />
        }
      </ScrollView>
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