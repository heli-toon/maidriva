import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet } from 'react-native'

const Explore = () => {
    return (
      <ThemedView>
        <ThemedText style={styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Explore</ThemedText>
      </ThemedView>
    )
}

export default Explore

const styles = StyleSheet.create({
  text : {
    padding: 20,
    fontSize : 20,
    fontWeight : 'bold',
 },
})
