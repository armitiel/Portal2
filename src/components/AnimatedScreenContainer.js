import React, { useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  Easing
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

// A simple component that slides in from the edge of the screen
const AnimatedScreenContainer = ({ children, isActive, direction = 'right' }) => {
  // Start position is off-screen
  const translateX = useSharedValue(direction === 'right' ? width : -width);
  
  // When active, animate to the center of the screen
  useEffect(() => {
    if (isActive) {
      translateX.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [isActive, direction]);

  // Create the animated style for sliding
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#171D26', // Match app background color
  },
});

export default AnimatedScreenContainer;