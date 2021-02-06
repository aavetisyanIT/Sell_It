import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';

export default function WelcomeScreen() {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image
					source={require('../assets/logo-red.png')}
					style={styles.logo}
				/>
				<Text>Sell What You Don't Need!</Text>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: colors.secondary,
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: colors.primary,
	},
});
