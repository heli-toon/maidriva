import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import {Colors} from '@/constants/Colors'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

const Bookings = () => {
    const theme = useColorScheme() ?? 'light';

    return (
      <ThemedView>
        <ThemedText style={styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Bookings</ThemedText>
      </ThemedView>
    )
}

export default Bookings

const styles = StyleSheet.create({
  text : {
    fontSize : 20,
    fontWeight : 'bold',
  },
})
