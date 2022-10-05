import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, View } from 'react-native'
import Text from '../../theme/Text';
import { AntDesign } from '@expo/vector-icons';

export default function List({ user, navigation, route }) {
  // console.log('user :>> ', user);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexBetween}>
        <Text preset='h4'>My Notes</Text>
        <Pressable onPress={()=> navigation.navigate("Create")}>
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