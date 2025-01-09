import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

const tourist = () => {
  return (
    <ThemedView>
      <ThemedText>Login as Tourist</ThemedText>
    </ThemedView>
  )
}

export default tourist

const styles = StyleSheet.create({})