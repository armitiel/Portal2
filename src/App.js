import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Importujemy nasze ekrany
import KioskDefaultScreen from './screens/KioskDefaultScreen';
import EnterNumber from './screens/EnterNumber';

// Tymczasowe komponenty dla pozostałych ekranów

const ProductScanningScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Product Scanning Screen</Text>
  </View>
);

const IdScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>ID Screen</Text>
  </View>
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="KioskDefaultScreen"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#171d26' }
        }}
      >
        <Stack.Screen name="KioskDefaultScreen" component={KioskDefaultScreen} />
        <Stack.Screen name="EnterNumber" component={EnterNumber} />
        <Stack.Screen name="ProductScanning" component={ProductScanningScreen} />
        <Stack.Screen name="Id" component={IdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  placeholderScreen: {
    flex: 1,
    backgroundColor: '#171d26',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;