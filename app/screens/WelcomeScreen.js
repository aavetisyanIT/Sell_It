import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';
import AppButton from './../components/AppButton';

export default function WelcomeScreen() {
	return (
		<ImageBackground
			blurRadius={2}
			style={styles.background}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image
					source={require('../assets/logo-red.png')}
					style={styles.logo}
				/>
				<Text style={styles.tagline}>
					Sell What You Don't Need!
				</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title='Login' color='primary' />
				<AppButton title='Register' color='secondary' />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	tagline: {
		fontSize: 25,
		fontWeight: '600',
		paddingVertical: 20,
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
	buttonsContainer: {
		padding: 20,
		width: '100%',
	},
});
