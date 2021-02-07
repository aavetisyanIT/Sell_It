import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from './../components/Screen';

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/logo-red.png')}
			/>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => console.log(values)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='email'
							keyboardType='email-address'
							onChangeText={handleChange('email')}
							placeholder='Email'
							textContentType='emailAddress'
						/>
						<AppTextInput
							autoCapitalize='none'
							autoCorrect={false}
							icon='lock'
							placeholder='Password'
							textContentType='password'
							secureTextEntry
							onChangeText={handleChange('password')}
						/>
						<AppButton title='Login' onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});
