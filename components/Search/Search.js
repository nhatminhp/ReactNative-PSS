import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput, ListView, ActivityIndicator } from 'react-native';
export default class Search extends React.Component {
	static navigationOptions = {
		header: null,
	}
	constructor(props) {
    	super(props);
    	this.state = {
    		keyword: '',
    		search: '',
        }
    }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});