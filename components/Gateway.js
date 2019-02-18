import React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
export default class Gateway extends React.Component {
	static navigationOptions = {
		header: null,
	}
	constructor(props) {
    	super(props);
    	this.state = {
        }
    }
  render() {
    return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.container}>
                  <View style={styles.searchRoute}>
                        <TouchableOpacity style={styles.searchButton} onPress={ () => this.props.navigation.navigate('Search')}>
                            <Text>
                                Search a recipe
                            </Text>
                        </TouchableOpacity>

                  </View>
                  <View style={styles.createRoute}>
                    <TouchableOpacity style={styles.addButton}>
                        <Text>
                            Create new cecipe
                        </Text>
                    </TouchableOpacity>
                  </View>
              </View>
          </KeyboardAvoidingView>
        );

  }
}

const styles = StyleSheet.create({
    searchButton: {
        backgroundColor: '#52E8FF',
        padding:20,
        marginBottom: 50,
        borderRadius: 50,
        width: 250,
        alignItems: 'center'
    },
    addButton: {
        marginTop: 50,
        backgroundColor: '#38FF60',
        padding:20,
        borderRadius: 50,
        width: 250,
        alignItems: 'center'

    },
    searchRoute: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    createRoute: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
	container: {
		flex: 1,
//		backgroundColor: 'blue'
	},
	logoContainer: {
//		borderRadius: 6,
//		alignItems: 'center',
		flex: 1,
//		justifyContent: 'center',
//		backgroundColor: 'red',
		flexDirection: 'row'
	},
	title: {
        color: '#ffffff',
        fontSize: 28,
        marginTop: 10,
        textAlign: 'center',
	},
	formContainer: {
	    flex: 11,
	},
	inputIcon:{
	        flex: 1,
            backgroundColor: 'white'
    },
    inputs:{
              flex:9,

    },
});