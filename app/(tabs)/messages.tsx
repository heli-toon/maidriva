import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

const Messages = () => {
    return (
      <ThemedView>
        <ThemedText style={styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Messages</ThemedText>
      </ThemedView>
    )
}

export default Messages

const styles = StyleSheet.create({
  text : {
    padding: 20,
    fontSize : 20,
    fontWeight : 'bold',
 },
})