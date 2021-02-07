import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from './../components/Screen';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import Icon from './../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
];

export default function AccountScreen() {
	return (
		<Screen style={styles.screen}>
			<ListItem
				title='John Smith'
				subTitle='johnsmith@gmail.com'
				image={require('../assets/person.jpg')}
			/>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={menuItem => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={
										item.icon.backgroundColor
									}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<ListItem
				title='Log Out'
				IconComponent={
					<Icon name='logout' backgroundColor='yellow' />
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});
