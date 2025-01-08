import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AppLayout() {
  const theme = useColorScheme() ?? 'light';

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboarded = await AsyncStorage.getItem('hasOnboarded');
      if (onboarded === 'true') {
        router.replace('/(tabs)/explore'); // Skip onboarding and go to home screen
      } else {
        router.replace('/(tabs)/explore'); // Show onboarding if not completed
      }
      setLoading(false);
    };
    checkOnboardingStatus();
  }, [router]);

  if (loading) {
    return <ActivityIndicator size="large" color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />;
  }
  return (
      <>
        <ThemedView >
          <ThemedText style={styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Good Morning</ThemedText>
        </ThemedView>
      </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
})