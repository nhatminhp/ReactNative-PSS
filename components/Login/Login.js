import React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import LoginForm from './LoginForm';

var {height, width} = Dimensions.get('window')
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
					source={require('../../Dinner.png')} 
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
		height: height/3,
		borderRadius: 6,
		alignItems: 'center',
		flexGrow: 1,
		// justifyContent: 'center',
	},
	logo: {
		marginTop: height/6,
		width: 200,
		height: 200
	},
	formContainer: {
		height: 2*height/3,
		borderRadius: 6,
		// alignItems: 'center',
		// flexGrow: 1,
		justifyContent: 'center'
	},
});