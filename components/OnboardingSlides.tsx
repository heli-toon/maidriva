import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Image, StyleSheet, Dimensions, Button, useColorScheme } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: "Welcome to Our App!",
    text: "Discover amazing features to enhance your experience.",
    image: require('@/assets/images/slide1.svg'),
  },
  {
    id: 2,
    title: "Stay Connected",
    text: "Engage with your friends and community seamlessly.",
    image: require('@/assets/images/slide2.svg'),
  },
  {
    id: 3,
    title: "Achieve Your Goals",
    text: "Track your progress and accomplish more every day.",
    image: require('@/assets/images/slide3.svg'),
  },
];

export default function OnboardingSlides() {
    const colorScheme = useColorScheme();
  
  const [index, setIndex] = useState(0);  // Keep track of the current slide index

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);  // Move to next slide
    } else {
      // Optionally navigate to another screen or close onboarding
      console.log("Onboarding Completed");
    }
  };

  const renderItem = (item: typeof slides[0], index: number) => (
    <ThemedView style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <ThemedText style={styles.title}>{item.title}</ThemedText>
      <ThemedText style={styles.text}>{item.text}</ThemedText>
      {/* Show "Get Started" button on the last slide */}
      {index === slides.length - 1 && (
        <Button title="Get Started" onPress={handleNext} />
      )}
    </ThemedView>
  );

  return (
    <Carousel
      width={screenWidth}
      height={400}
      data={slides}
      scrollAnimationDuration={800}
      onSnapToItem={(index) => setIndex(index)}  // Updates the index on slide change
      renderItem={({ item, index }) => renderItem(item, index)}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.light.tint,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.light.tint,
  },
});
