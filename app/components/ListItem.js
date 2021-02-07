import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';

export default function ListItem({ title, subTitle, image }) {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<View>
				<AppText title={title} style={styles.title} />
				<AppText title={subTitle} style={styles.subTitle} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: '500',
	},
	subTitle: {
		color: colors.medium,
	},
});
