import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import Text from '../../theme/Text';
import { AntDesign } from '@expo/vector-icons';
import { collection, onSnapshot, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { spacing } from './../../theme/spacing';

export default function List({ user, navigation, route }) {
  // console.log('user :>> ', user);
  const [notes, setNotes] = useState([]);

  useEffect(() => {

    const qry = query(collection(db, 'notes'), where("uid", "==", user.uid));
    const notesListListener = onSnapshot(qry, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      })
      setNotes(list);
    })
    return notesListListener;
  }, [])

  const renderItem = ({ item }) => {
    const { title, description, theme } = item;

    return (
      <Pressable style={{ backgroundColor: theme, marginBottom: 10, borderRadius: 10, padding: 15 }}>
        <Text preset='h3' style={{ color: "white" }}>{item.title}</Text>
        <Text style={{ color: "white", fontSize: 16, marginTop: 10 }}>{description}</Text>
      </Pressable>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flexBetween}>
          <Text preset='h4'>My Notes</Text>
          <Pressable onPress={() => navigation.navigate("Create")}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </Pressable>
        </View>

        <View>
          <FlatList
            data={notes}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{ padding: spacing[5] }}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 15
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing[5]
  }
})