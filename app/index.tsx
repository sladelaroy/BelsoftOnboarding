import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import OnboardingSwipe from 'react-onboarding-swipe';

const slides = [
  {
    image: require('./assets/onboarding1.png'),
    title: 'Help with Everyday Tasks',
    description: 'Manage daily tasks with trusted professionals.',
    backgroundColor: '#4CAF50',
  },
  {
    image: require('./assets/onboarding2.png'),
    title: 'Find the Perfect Tasker',
    description: 'Select based on skills, price, and reviews.',
    backgroundColor: '#4CAF50',
  },
  {
    image: require('./assets/onboarding3.png'),
    title: 'One App, Infinite Solutions',
    description: 'Everything you need in one place.',
    backgroundColor: '#4CAF50',
  },
];

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OnboardingSwipe
        pages={slides}
        containerStyles={styles.container}
        titleStyles={styles.title}
        descriptionStyles={styles.description}
        indicatorStyles={styles.indicator}
        indicatorActiveStyles={styles.indicatorActive}
        skipButtonComponent={<Text style={styles.skip}>Skip</Text>}
        nextButtonComponent={<Text style={styles.next}>Next</Text>}
        onDone={() => console.log('Onboarding finished')}
        onSkip={() => console.log('Onboarding skipped')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  indicator: {
    backgroundColor: '#888',
    width: 10,
    height: 10,
    marginHorizontal: 4,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    marginHorizontal: 4,
    borderRadius: 6,
  },
  skip: {
    position: 'absolute',
    top: 40,
    right: 20,
    color: '#bbb',
    fontSize: 16,
  },
  next: {
    backgroundColor: '#6200EE',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 30,
  },
});