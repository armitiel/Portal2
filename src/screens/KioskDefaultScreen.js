import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Animated, Platform, Text } from 'react-native';
import PropertyDefaultWrapper from '../components/PropertyDefaultWrapper';

export const KioskDefaultScreen = ({ navigation }) => {
  // Animacja dla frame-36
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.frame34}>
        <View style={styles.frame35}>
          <View style={styles.logoWrapper}>
            <Image
              source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/nwmo2m5t_expires_30_days.png"}}
              resizeMode={"contain"}
              style={styles.logo19}
            />
          </View>
          
          <View style={styles.unionWrapper}>
            {Platform.OS === 'web' ? (
              <div style={{
                color: '#ffffff',
                fontFamily: 'Poppins, Helvetica',
                fontSize: '64px',
                fontWeight: '600',
                textAlign: 'center',
                letterSpacing: '1px',
                position: 'relative',
                width: '100%',
                marginTop: '20px',
                marginBottom: '20px',
              }}>Smart Checkout<sup style={{fontSize: '20px'}}>®</sup></div>
            ) : (
              <Text style={styles.titleText}>
                Smart Checkout<Text style={styles.registerMark}>®</Text>
              </Text>
            )}
          </View>
        </View>
      </View>

      <Animated.View style={[styles.frame36, { opacity: fadeAnim }]}>
        <View style={styles.frame37}>
          <PropertyDefaultWrapper 
            property1="default" 
            onPress={() => navigation.navigate('EnterNumber')} 
          />
          <View style={styles.frame38} />
        </View>
      </Animated.View>

      {Platform.OS === 'web' && (
        <div style={{
          height: '236px',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'linear-gradient(to bottom, rgba(23, 29, 38, 0), rgba(23, 29, 38, 0.8))'
        }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#171d26',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    padding: Platform.OS === 'web' ? '140px 120px 95px' : 20,
    position: 'relative',
    width: '100%',
  },
  frame34: {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    height: Platform.OS === 'web' ? 323.5 : '30%',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Platform.OS === 'web' ? 0 : 20,
  },
  frame35: {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 50,
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  logoWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: 30,
  },
  logo19: {
    height: 83,
    width: 285.12,
  },
  unionWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  titleText: {
    color: '#ffffff',
    fontFamily: Platform.OS === 'web' ? 'Poppins, Helvetica' : 'System',
    fontSize: 64,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  registerMark: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    verticalAlign: 'top',
  },
  frame36: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    gap: 96,
    height: Platform.OS === 'web' ? 323.5 : '40%',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: Platform.OS === 'web' ? 0 : 20,
  },
  frame37: {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 49,
    justifyContent: 'center',
    marginTop: 49,
    position: 'relative',
    width: '100%',
  },
  frame38: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    position: 'relative',
    width: '100%',
    height: 49, // Dodane, aby zachować proporcje
  },
});

export default KioskDefaultScreen;