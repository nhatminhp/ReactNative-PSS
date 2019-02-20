import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window')
export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateEmail = () => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(this.state.email);
    };

    validateConfirmPasswordMatched = () => {
        return (this.state.password == this.state.confirmPassword);
    }

    validateAllParams = () => {
        if (!this.state.email
            || !this.state.firstName
            || !this.state.lastName
            || !this.state.password
            || !this.state.confirmPassword
            ) {
            return false
        }
        return true;
    }

    handleSubmit() {
        if (!this.validateAllParams()) {
            return Alert.alert("You need to fill in all fields");
        }
        if (!this.validateEmail()) {
            return Alert.alert("You need to input valid email address");
        }
        if (!this.validateConfirmPasswordMatched()) {
            return Alert.alert("Password mismatched");
        }
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
            <View style={styles.inputContainer}>
            <TextInput
					placeholder="Email Address"
					textContentType="emailAddress"
					placeholderTextColor="#4d5054"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCorrect={false}
					autoCapitalize="none"
                    style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
					/>
            <TextInput
					placeholder="First name"
					textContentType="givenName"
					placeholderTextColor="#4d5054"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="default"
					autoCorrect={false}
					autoCapitalize="none"
                    style={styles.input}
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
					/>
            <TextInput
					placeholder="Last name"
					textContentType="familyName"
					placeholderTextColor="#4d5054"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="default"
					autoCorrect={false}
					autoCapitalize="none"
                    style={styles.input}
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName}
					/>
            <TextInput
					placeholder="Password"
					placeholderTextColor="#4d5054"
					secureTextEntry={true}
					ref={(input) => this.passwordInput = input}
                    style={styles.input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
					/>
            <TextInput
					placeholder="Confirm Password"
					placeholderTextColor="#4d5054"
					secureTextEntry={true}
					ref={(input) => this.passwordInput = input}
                    style={styles.input}
                    onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                    value={this.state.confirmPassword}
					/>
            <TouchableOpacity style={styles.signupButton}
                onPress={this.handleSubmit}>
                <Text style={styles.signupText}>Register</Text>
            </TouchableOpacity>
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
        flex: 1,
        height: height/3,
		borderRadius: 6,
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
    },
    inputContainer: {
        // flex: 1,
        height: 2*height/3,
        // backgroundColor: 'red',
        borderRadius: 6,
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
    },
	logo: {
		width: 200,
        height: 200,
        marginTop: 170,
    },
    input: {
		height: 40,
		backgroundColor: '#dae3ea',
		marginBottom: 12,
		color: '#4d5054',
		paddingHorizontal: 10,
        borderRadius: 6,
        width: 330,
    },
    signupButton: {
        backgroundColor: '#676a6d',
		paddingVertical: 15,
        borderRadius: 6,
        width: 330,
		marginTop: 10
    },
    signupText: {
        textAlign: 'center',
		color: '#FFFFFF',
    },
});