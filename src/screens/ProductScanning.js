import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
export default ({ setCurrentScreen }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={{
					flexDirection: "row",
					alignItems: "flex-start",
					paddingHorizontal: 25,
					marginVertical: 25,
				}}>
					<View style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "flex-start",
						alignItems: "center",
						marginRight: 12,
					}}>
						<TouchableOpacity
							style={styles.view}
							onPress={() => setCurrentScreen('enterNumber')}
						>
							<Text style={styles.text}>
								{"<"}
							</Text>
						</TouchableOpacity>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/y9v05fs5_expires_30_days.png"}}
							resizeMode = {"stretch"}
							style={{
								width: 136,
								height: 42,
								marginLeft: 30,
							}}
						/>
					</View>
					<View style={{
						width: 487,
						height: 60,
					}}>
					</View>
				</View>
				<View style={styles.row3}>
					<View style={styles.view2}>
						<View style={styles.column}>
							<View style={styles.row4}>
								<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text3}>
										{"Phone"}
									</Text>
								</TouchableOpacity>
								<View style={styles.view3}>
									<Text style={styles.text4}>
										{"Camera"}
									</Text>
								</View>
								<View style={styles.view4}>
									<Text style={styles.text5}>
										{"Search"}
									</Text>
								</View>
							</View>
							<View style={styles.box}>
							</View>
							<View style={styles.column2}>
								<Text style={styles.text6}>
									{"Hold Barcode up to Camera "}
								</Text>
								<Text style={styles.text7}>
									{"Make sure barcode is close enough to focus"}
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.column3}>
						<View style={styles.column4}>
							<View style={styles.row5}>
								<View style={styles.row6}>
									<View style={styles.column5}>
										<View style={styles.view5}>
											<Text style={styles.text8}>
												{"$5  Cashback"}
											</Text>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/1j2tu5i5_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image2}
										/>
									</View>
									<View style={styles.column6}>
										<Text style={styles.text9}>
											{"No Label El Hefe"}
										</Text>
										<Text style={styles.text10}>
											{"El Hefe 6-pack. - add. info"}
										</Text>
									</View>
								</View>
								<View style={styles.column7}>
									<Text style={styles.text11}>
										{"$32.99"}
									</Text>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ZNiYplSqim/e0ael863_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={styles.image3}
									/>
								</View>
							</View>
							<View style={styles.row7}>
								<View style={styles.view6}>
									<Text style={styles.text12}>
										{"Subtotal"}
									</Text>
								</View>
								<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text13}>
										{"$522.00"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<TouchableOpacity style={styles.button3} onPress={() => setCurrentScreen('id')}>
							<Text style={styles.text14}>
								{"Verify Age"}
							</Text>
						</TouchableOpacity>
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
		height: 519, // Restored to the original height
		marginBottom: 10,
	},
	button: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#253141",
		borderTopLeftRadius: 11,
		borderBottomLeftRadius: 11,
		paddingVertical: 8,
	},
	button2: {
		backgroundColor: "#E4B413",
		borderTopRightRadius: 11,
		borderBottomRightRadius: 11,
		paddingVertical: 13,
		paddingHorizontal: 35,
	},
	button3: {
		backgroundColor: "#3A6EF2",
		borderColor: "#648DF6",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 20,
		width: '100%', // Full width of container
		alignItems: 'center', // Center text horizontally
		justifyContent: 'center', // Center text vertically
		marginTop: 10,
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
		backgroundColor: "#3A6EF2",
		borderColor: "#364153",
		borderRadius: 11,
		borderWidth: 1,
	},
	column2: {
		backgroundColor: "#253141",
		borderColor: "#475367",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 10,
	},
	column3: {
		alignItems: "center",
		paddingBottom: 20,
	},
	column4: {
		alignItems: "flex-start",
		backgroundColor: "#0E1217",
		borderColor: "#364153",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 20,
		paddingHorizontal: 12, // Reduced by half
		marginBottom: 10,
	},
	column5: {
		alignItems: "flex-start",
		marginTop: 1,
		marginRight: 13,
	},
	column6: {
		paddingVertical: 16,
	},
	column7: {
		alignItems: "center",
		backgroundColor: "#1F2937",
		borderRadius: 11,
		paddingVertical: 11,
		paddingHorizontal: 17,
	},
	image: {
		width: 136,
		height: 42,
		marginLeft: 30, // Zwiększony odstęp między przyciskiem a logiem
	},
	image2: {
		width: 87,
		height: 65,
		marginLeft: 28,
	},
	image3: {
		width: 133,
		height: 44,
	},
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginVertical: 25, // Match EnterNumber.js margins
		marginHorizontal: 25,
	},
	row2: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start", // Changed to match EnterNumber.js
		alignItems: "center",
		marginRight: 12,
	},
	row3: {
		flexDirection: "row",
		alignItems: "flex-start",
		paddingHorizontal: 50, // Match EnterNumber.js
		marginBottom: 25,
	},
	row4: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 10,
	},
	row5: {
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: "#253141",
		borderRadius: 11,
		marginBottom: 375,
		marginLeft: 12, // Reduced by half
		marginRight: 12, // Reduced by half
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 2,
		elevation: 2,
		width: 'auto', // Allow width to adjust to content
	},
	row6: {
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: "#253141",
		borderRadius: 11,
		paddingVertical: 11,
		paddingLeft: 39,
		paddingRight: 5,
		marginRight: 1,
	},
	row7: {
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: "#253141",
		borderColor: "#E4B413",
		borderRadius: 11,
		borderWidth: 1,
		marginLeft: 12, // Reduced by half
		marginRight: 12, // Reduced by half
		marginTop: 10,
		marginBottom: 10,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
		width: 'auto', // Allow width to adjust to content
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
		color: "#FFFFFF",
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		marginHorizontal: 90,
		width: 306,
	},
	text3: {
		color: "#E7E7E7",
		fontSize: 20,
		fontWeight: "bold",
	},
	text4: {
		color: "#E8E8E8",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginHorizontal: 63,
	},
	text5: {
		color: "#E7E7E7",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginHorizontal: 70,
	},
	text6: {
		color: "#E7E7E7",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 1,
		marginHorizontal: 197,
	},
	text7: {
		color: "#E7E7E7",
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 171,
	},
	text8: {
		color: "#FFFFFF",
	},
	text9: {
		color: "#E8E8E8",
		fontSize: 16,
		marginBottom: 3,
		width: 85,
	},
	text10: {
		color: "#E8E8E8",
		fontSize: 10,
		width: 81,
	},
	text11: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 11,
		marginBottom: 19,
		marginHorizontal: 27,
	},
	text12: {
		color: "#E8E8E8",
		fontSize: 24,
		fontWeight: "bold",
		marginVertical: 6,
		marginHorizontal: 14,
	},
	text13: {
		color: "#1F2937",
		fontSize: 24,
		fontWeight: "bold",
	},
	text14: {
		color: "#FFFFFF",
		fontSize: 22,
		fontWeight: "bold",
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
	view2: {
		flex: 1,
		backgroundColor: "#0E1217",
		borderColor: "#364153",
		borderRadius: 11,
		borderWidth: 1,
		padding: 20,
		marginRight: 0, // Remove right margin
	},
	view3: {
		flex: 1,
		backgroundColor: "#374861",
		paddingVertical: 8,
	},
	view4: {
		flex: 1,
		backgroundColor: "#253141",
		borderTopRightRadius: 11,
		borderBottomRightRadius: 11,
		paddingVertical: 8,
	},
	view5: {
		backgroundColor: "#3D706A",
		borderColor: "#468F87",
		borderRadius: 11,
		borderWidth: 1,
		paddingVertical: 4,
		paddingRight: 17,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	view6: {
		backgroundColor: "#253141",
		borderTopLeftRadius: 11,
		borderBottomLeftRadius: 11,
		paddingVertical: 13,
		paddingLeft: 17,
		paddingRight: 128,
		marginRight: 1,
	},
});