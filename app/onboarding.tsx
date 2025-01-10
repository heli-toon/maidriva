import React from 'react';
import { TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import OnboardingSlides from '@/components/OnboardingSlides';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function OnboardingScreen() {
  const router = useRouter();
  const completeOnboarding = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true'); // Mark onboarding as complete
    router.replace('/'); // Navigate to the home screen after onboarding
  };

  return (
    <ThemedView style={styles.container}>
      <OnboardingSlides />
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={completeOnboarding}>
          <ThemedText style={styles.buttonText} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Get Started</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7fafc',
  },
  buttonContainer: {
    padding: 16,
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.dark.tint,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
