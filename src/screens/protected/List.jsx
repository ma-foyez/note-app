import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, View } from 'react-native'
import Text from '../../theme/Text';
import { AntDesign } from '@expo/vector-icons';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

export default function List({ user, navigation, route }) {
  // console.log('user :>> ', user);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const qry = query(collection(db, 'notes'), where("uid", "==", user.uid));
    const notesListListener = onSnapshot(qry, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data);
      })
      setNotes(list);
    })
    return notesListListener;
  }, [])

  console.log('notes :>> ', notes);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexBetween}>
        <Text preset='h4'>My Notes</Text>
        <Pressable onPress={() => navigation.navigate("Create")}>
          <AntDesign name="pluscircle" size={24} color="black" />
        </Pressable>
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