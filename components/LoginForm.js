import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getUserInfo } from '../services/FetchLogin';
import {createStackNavigator} from 'react-navigation';

export default class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		}
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChangeEmail(e) {
		this.setState({
			email: e.nativeEvent.text
		});
	}
	handleChangePassword(e) {
		this.setState({
			password: e.nativeEvent.text
		});
	}

	async handleSubmit() {
		fetch('http://wonderdance-interaction.duckdns.org/comment', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
        //                email: email,
        //                password: password,
                          user_id: 1,
                          video_id: 1,
                          data: {
                                content: '123'
                          },
                      })
                    }).then((response) => response.json())
                            .then((responseJson) => {
                                AsyncStorage.multiSet([
                                  ["token", responseJson.comment_id.toString()],
                                ])
                                Alert.alert(responseJson.comment_id.toString());
                                this.props.screenProps.rootNavigation.navigate('Home')
                            })
                            .catch((error) => {
                              return Alert.alert(error);
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
					placeholderTextColor="rgba(255,255,255,0.7)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
					style={styles.input}
					onChangeText={(email) => this.setState({email})}
					/>
				<TextInput
					placeholder="Password"
					placeholderTextColor="rgba(255,255,255,0.7)"
					secureTextEntry={true}
					returnKeyType="go"
					ref={(input) => this.passwordInput = input}
					style={styles.input}
					onChangeText={(password) => this.setState({password})}
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
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 20,
		color: '#FFF',
		paddingHorizontal: 10,
		borderRadius: 6,
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
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