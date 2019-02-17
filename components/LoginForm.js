import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getUserInfo } from '../services/FetchLogin';

export default class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			// Password: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			username: e.nativeEvent.text
		});
	}

	handleSubmit() {
		getUserInfo(this.state.username)
          .then((res) => {
              Alert.alert(res);
        });
	}
	

	render() {
		const Divider = (props) => {
			return <View {...props}>
				<View style={styles.line}></View>
				<Text style={styles.textOR}>OR</Text>
				<View style={styles.line}></View>
			</View>
		}
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="Username or Email"
					textContentType="emailAddress"
					placeholderTextColor="#4d5054"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					style={styles.input}
					onChange={this.handleChange}
					/>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#4d5054"
					secureTextEntry={true}
					returnKeyType="go"
					ref={(input) => this.passwordInput = input}
					style={styles.input}
					/>
				
				<TouchableOpacity 
					style={styles.buttonContainer}
					onPress={this.handleSubmit}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				<Divider style={styles.divider}></Divider>
				<FontAwesome.Button name="facebook"
				style={styles.facebookButton}>
					<Text style={styles.buttonText}>Login with Facebook</Text>
				</FontAwesome.Button>
				<TouchableOpacity 
					style={styles.toSignupButton}>
					<Text style={styles.buttonText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: '#dae3ea',
		marginBottom: 20,
		color: '#4d5054',
		paddingHorizontal: 10,
		borderRadius: 6,
	},
	buttonContainer: {
		backgroundColor: '#676a6d',
		paddingVertical: 15,
		borderRadius: 6,
		// marginBottom: 10,
	},
	facebookButton: {
		backgroundColor: '#3b5998',
		paddingVertical: 15,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	toSignupButton: {
		backgroundColor: '#d13e54',
		paddingVertical: 15,
		borderRadius: 6,
		marginTop: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
	},
	line: {
		flex: 2,
		height: 1,
		backgroundColor: 'black',
	},
	textOR: {
		flex: 1,
		textAlign: 'center',
		color: 'black',
	},
	divider: {
		height: 35,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});