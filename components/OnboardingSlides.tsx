import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: "Welcome to Our App!",
    text: "Discover amazing features to enhance your experience.",
    image: require('../assets/images/hero-bg.png'), // Replace with your image
  },
  {
    id: 2,
    title: "Stay Connected",
    text: "Engage with your friends and community seamlessly.",
    image: require('../assets/images/slide2.jpg'), // Replace with your image
  },
  {
    id: 3,
    title: "Achieve Your Goals",
    text: "Track your progress and accomplish more every day.",
    image: require('../assets/images/slide3.jpg'), // Replace with your image
  },
];

export default function OnboardingSlides() {
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
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
      {/* Show "Get Started" button on the last slide */}
      {index === slides.length - 1 && (
        <Button title="Get Started" onPress={handleNext} />
      )}
    </View>
  );

  return (
    <Carousel
      loop
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
    color: '#2d3748',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4a5568',
  },
});
