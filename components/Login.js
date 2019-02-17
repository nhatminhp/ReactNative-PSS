import React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
	static navigationOptions = {
		header: null,
	}
  render() { 
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
				
			
				<Image 
					style={styles.logo}
					source={require('../Dinner.png')} 
					/>
					<Text style={styles.title}>Dinner Today</Text>
			</View>
			<View style={styles.formContainer}>
				<LoginForm />
			</View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db'
	},
	logoContainer: {
		borderRadius: 6,
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 150,
		height: 150
	},
	title: {
	color: '#ffffff',
	fontSize: 28,
	marginTop: 10,
	textAlign: 'center',
	}
});