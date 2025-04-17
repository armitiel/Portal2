import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import EnterNumber from "./src/screens/EnterNumber";
import ProductScanning from "./src/screens/ProductScanning";

export default (props) => {
	const [currentScreen, setCurrentScreen] = useState('home');
	
	// Renderuj odpowiedni ekran na podstawie stanu
	if (currentScreen === 'enterNumber') {
		return <EnterNumber setCurrentScreen={setCurrentScreen} />;
	}
	
	// Obsługa ekranu ProductScanning
	if (currentScreen === 'productScanning') {
		return <ProductScanning setCurrentScreen={setCurrentScreen} />;
	}
	
	// Dodajmy obsługę ekranu Id
	if (currentScreen === 'id') {
		// Tymczasowy widok dla ekranu Id
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: '#171D26', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{color: 'white', fontSize: 24, marginBottom: 20}}>ID Screen</Text>
				<TouchableOpacity
					style={{marginTop: 20, padding: 15}}
					onPress={() => setCurrentScreen('productScanning')}
				>
					<Text style={{color: 'white', fontSize: 16}}>Back</Text>
				</TouchableOpacity>
			</SafeAreaView>
		);
	}
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.mainContainer}>
				<View style={styles.column}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/nwmo2m5t_expires_30_days.png"}}
						resizeMode = {"contain"}
						style={styles.image}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/lpl3wdmw_expires_30_days.png"}}
						resizeMode = {"contain"}
						style={styles.image2}
					/>
				</View>
				<View style={styles.column2}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => setCurrentScreen('enterNumber')}>
						<Text style={styles.text}>
							{"Start "}
						</Text>
					</TouchableOpacity>
					<View style={styles.box}>
					</View>
				</View>
				{/* Tło z gradientem - widoczne pod wszystkimi elementami */}
				<View style={styles.background} />
				
				{/* Gradient na dole ekranu */}
				{Platform.OS === 'web' ? (
					// Dla wersji web używamy div z gradientem CSS
					<div style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						height: '300px',
						background: 'radial-gradient(ellipse at 50% 100%, rgba(58, 110, 242, 0.7) 0%, rgba(58, 110, 242, 0.2) 40%, rgba(23, 29, 38, 0) 70%)',
						pointerEvents: 'none',
						width: '100%',
						zIndex: 1,
					}}></div>
				) : (
					// Dla wersji mobilnej używamy View z gradientem
					<View style={styles.bottomGradient}></View>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#171D26", // Zmiana koloru tła na ciemny granatowy, zgodny z przykładowym zrzutem ekranu
	},
	box: {
		height: 54,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#3A6EF2",
		borderColor: "#648DF6",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 20,
		marginBottom: 49,
		width: '100%', // Szerokość taka sama jak elementu "Smart Checkout"
		maxWidth: 805, // Maksymalna szerokość, taka sama jak szacowana szerokość "Smart Checkout"
		alignSelf: 'center', // Wycentrowanie przycisku
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	column: {
		paddingVertical: 54,
		marginTop: 144,
		marginHorizontal: 120,
	},
	column2: {
		paddingVertical: 55,
		marginBottom: 83,
		marginHorizontal: 120,
	},
	image: {
		height: 83,
		width: '100%',
		aspectRatio: 3.43, // Szacowany współczynnik proporcji (285.12/83)
		marginBottom: 49,
	},
	image2: {
		height: 82,
		width: '100%',
		aspectRatio: 9.82, // Szacowany współczynnik proporcji (805.54/82)
	},
	background: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#171D26',
		zIndex: -1,
	},
	bottomGradient: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 300,
		// Dla lepszego efektu na urządzeniach mobilnych zalecamy zainstalowanie i użycie:
		// npm install expo-linear-gradient
		// i zastąpienie View komponentem LinearGradient z odpowiednimi kolorami
		backgroundColor: 'rgba(58, 110, 242, 0.3)',
		borderTopLeftRadius: 300,
		borderTopRightRadius: 300,
		transform: [{ scaleX: 2 }],
		opacity: 0.7,
		zIndex: 1,
	},
	mainContainer: {
		flex: 1,
		backgroundColor: "#171D26",
		position: 'relative', // Dodane, aby gradient był poprawnie pozycjonowany
	},
	text: {
		color: "#FFFFFF",
		fontSize: 48,
		fontWeight: "bold",
	},
});