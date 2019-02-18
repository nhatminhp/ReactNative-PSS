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
			</View>
			<View style={styles.formContainer}>
				<LoginForm navigation ={this.props.navigation}> </LoginForm>
			</View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	logoContainer: {
		borderRadius: 6,
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 200,
		height: 200
	},
});