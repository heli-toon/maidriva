import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OnboardingSlides from '../components/OnboardingSlides'; // Your carousel component
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();

  const completeOnboarding = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true'); // Mark onboarding as complete
    router.replace('/'); // Navigate to the home screen after onboarding
  };

  return (
    <View style={styles.container}>
      <OnboardingSlides />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={completeOnboarding}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    backgroundColor: '#4CAF50', // Green color
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
