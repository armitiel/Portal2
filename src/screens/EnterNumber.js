import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default ({ setCurrentScreen }) => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const isFullNumberEntered = phoneNumber.length === 10;
	
	// Format telefonu jako "(xxx) xxx-xxxx"
	const formattedPhoneNumber = () => {
		if (phoneNumber.length === 0) return '';
		
		let formatted = '';
		
		if (phoneNumber.length > 0) {
			formatted += '(';
		}
		
		formatted += phoneNumber.substring(0, Math.min(3, phoneNumber.length));
		
		if (phoneNumber.length > 3) {
			formatted += ') ';
		}
		
		if (phoneNumber.length > 3) {
			formatted += phoneNumber.substring(3, Math.min(6, phoneNumber.length));
		}
		
		if (phoneNumber.length > 6) {
			formatted += '-';
		}
		
		if (phoneNumber.length > 6) {
			formatted += phoneNumber.substring(6, Math.min(10, phoneNumber.length));
		}
		
		return formatted;
	};
	
	// Obsługa kliknięć przycisków numerycznych
	const handleNumberClick = (num) => {
		if (num === '<') {
			setPhoneNumber(phoneNumber.slice(0, -1));
		} else if (num === 'C') {
			setPhoneNumber('');
		} else {
			if (phoneNumber.length < 10) {
				setPhoneNumber(phoneNumber + num);
			}
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<View style={styles.row2}>
						<TouchableOpacity
							style={styles.view}
							onPress={() => setCurrentScreen('home')}
						>
							<Text style={styles.text}>
								{"<"}
							</Text>
						</TouchableOpacity>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/l1tiuj30_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image}
						/>
					</View>
					<View style={styles.box}>
					</View>
				</View>
				<View style={styles.row3}>
					<View style={styles.column}>
						<View >
							<Text style={styles.text2}>
								{"Connect / Create Account"}
							</Text>
							<Text style={styles.text3}>
								{"Enter your Phone Number"}
							</Text>
						</View>
						<View style={styles.column2}>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/romq2ayz_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
								<Text style={styles.text4}>
									{"Access Digital receipts"}
								</Text>
							</View>
							<View style={styles.row4}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/u22cvspl_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
								<Text style={styles.text4}>
									{"Personalized discounts & rebates"}
								</Text>
							</View>
							<View style={styles.row5}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/m4kab5pg_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
								<Text style={styles.text5}>
									{"Personalized product reccomendations"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.column3}>
						<View style={styles.column4}>
							<View style={styles.input}>
								<Text style={{color: "#E8E8E8", fontSize: 24}}>
									{formattedPhoneNumber() || "Enter your phone number"}
								</Text>
							</View>
							<View >
								<View style={styles.row6}>
									<TouchableOpacity style={styles.button} onPress={() => handleNumberClick('1')}>
										<Text style={styles.text6}>
											{"1"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button2} onPress={() => handleNumberClick('2')}>
										<Text style={styles.text6}>
											{"2"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button3} onPress={() => handleNumberClick('3')}>
										<Text style={styles.text6}>
											{"3"}
										</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.row6}>
									<TouchableOpacity style={styles.button} onPress={() => handleNumberClick('4')}>
										<Text style={styles.text6}>
											{"4"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button2} onPress={() => handleNumberClick('5')}>
										<Text style={styles.text6}>
											{"5"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button3} onPress={() => handleNumberClick('6')}>
										<Text style={styles.text6}>
											{"6"}
										</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.row6}>
									<TouchableOpacity style={styles.button} onPress={() => handleNumberClick('7')}>
										<Text style={styles.text6}>
											{"7"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button2} onPress={() => handleNumberClick('8')}>
										<Text style={styles.text6}>
											{"8"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button3} onPress={() => handleNumberClick('9')}>
										<Text style={styles.text6}>
											{"9"}
										</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.row7}>
									<TouchableOpacity style={styles.button} onPress={() => handleNumberClick('<')}>
										<Text style={styles.text6}>
											{"<"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button2} onPress={() => handleNumberClick('0')}>
										<Text style={styles.text6}>
											{"0"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button3} onPress={() => handleNumberClick('C')}>
										<Text style={styles.text6}>
											{"C"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View >
							<TouchableOpacity
								style={[
									styles.button4,
									{backgroundColor: isFullNumberEntered ? '#3A6EF2' : '#5884F4'}
								]}
								onPress={() => setCurrentScreen('productScanning')}>
								<Text style={styles.text7}>
									{"Verify Age"}
								</Text>
							</TouchableOpacity>
							<Text style={styles.text8}>
								{"Continue as guest >"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		width: 487,
		height: 60,
	},
	button: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#253141",
		borderColor: "#3C485C",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 8,
		marginRight: 11,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	button2: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#253141",
		borderColor: "#3C485C",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 8,
		marginRight: 12,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	button3: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#253141",
		borderColor: "#3C485C",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 8,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	button4: {
		alignItems: "center",
		backgroundColor: "#3A6EF2",
		borderColor: "#648DF6",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 20,
		marginBottom: 35,
		marginHorizontal: 11,
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
		flex: 1,
		paddingBottom: 216,
		paddingLeft: 94,
		marginTop: 44,
		marginRight: 12,
	},
	column2: {
		paddingVertical: 23,
	},
	column3: {
		flex: 1,
		paddingBottom: 62,
		marginTop: 44,
	},
	column4: {
		backgroundColor: "#0E1217",
		borderColor: "#364153",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 21,
		paddingHorizontal: 20,
		marginBottom: 25,
	},
	image: {
		width: 136,
		height: 42,
		marginLeft: 10, // Zmniejszony odstęp między przyciskiem a logiem
	},
	image2: {
		width: 45,
		height: 45,
		marginRight: 16,
	},
	input: {
		color: "#E8E8E8",
		fontSize: 24,
		marginBottom: 20,
		backgroundColor: "#364153",
		borderColor: "#3A6EF2",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 23,
		paddingLeft: 27,
		paddingRight: 54,
		shadowColor: "#12182080",
		shadowOpacity: 0.5,
		shadowOffset: {
		    width: 0,
		    height: 23
		},
		shadowRadius: 29,
		elevation: 29,
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		paddingHorizontal: 25,
		marginVertical: 25,
	},
	row2: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start", // Zmienione z "space-between" na "flex-start"
		alignItems: "center",
		marginRight: 12,
	},
	row3: {
		flexDirection: "row",
		alignItems: "flex-start",
		paddingHorizontal: 50,
		marginBottom: 25,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
	},
	row6: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 11,
	},
	row7: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#171D26",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 40,
		fontWeight: "bold",
	},
	text2: {
		color: "#E1AD00",
		fontSize: 30,
		fontWeight: "bold",
	},
	text3: {
		color: "#E8E8E8",
		fontSize: 65,
		fontWeight: "bold",
	},
	text4: {
		color: "#E8E8E8",
		fontSize: 22,
	},
	text5: {
		color: "#E8E8E8",
		fontSize: 22,
		flex: 1,
	},
	text6: {
		color: "#E8E8E8",
		fontSize: 32,
		fontWeight: "bold",
	},
	text7: {
		color: "#E8E8E8",
		fontSize: 22,
		fontWeight: "bold",
	},
	text8: {
		color: "#E8E8E8",
		fontSize: 23,
		fontWeight: "bold",
		textAlign: "center",
		marginHorizontal: 11,
	},
	view: {
		backgroundColor: "#253141",
		borderColor: "#3C485C",
		borderRadius: 11,
		borderWidth: 1,
		paddingLeft: 27,
		paddingRight: 38,
		marginLeft: 11,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
});