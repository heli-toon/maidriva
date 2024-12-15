import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppLayout() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboarded = await AsyncStorage.getItem('hasOnboarded');
      if (onboarded === 'true') {
        router.replace('/'); // Skip onboarding and go to home screen
      } else {
        router.replace('/onboarding'); // Show onboarding if not completed
      }
      setLoading(false);
    };

    checkOnboardingStatus();
  }, [router]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return <></>;
}
