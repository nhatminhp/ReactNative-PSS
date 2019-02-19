import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, ListView, ActivityIndicator, Alert } from 'react-native';

import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
export default class Search extends React.Component {
	static navigationOptions = {
		header: null,
	}
	constructor(props) {
    	super(props);
    	this.state = {
    		keyword: '',
    		category: [{
                value: 'Appetizer',
              }, {
                value: 'Main disk',
              }, {
                value: 'Desert',
              }],
            ingredients:[{
                value: 'Egg',
              }, {
                value: 'Banana',
              }, {
                value: 'Apple',
              }, {
                value: 'Flour',
              }, {
                value: 'butter',
              }],
              ingredientsDropdown: [],
        }
        this.handleChooseIngredients = this.handleChooseIngredients.bind(this);
    }
    handleChooseIngredients() {
        let arr=this.state.ingredientsDropdown;
        let l1=this.state.ingredientsDropdown.length;
        arr.push(<Dropdown label='Ingredients' data={this.state.ingredients} onChangeText={()=>this.handleChooseIngredients()}/>);
        arr.pop();
        this.setState({ingredientsDropdown: arr})
    }
  render() {
        this.state.ingredientsDropdown.push(<Dropdown label='Ingredients' data={this.state.ingredients} onChangeText={()=>this.handleChooseIngredients()}/>)
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.listOptions}>
            <View style={styles.marginTop}></View>
            <View style={[styles.keyword, styles.searchOption]}>
                <TextField
                    label="Keyword"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(keyword) => this.setState({keyword})}
                />
            </View>
            <View style={[styles.searchOption]}>
            <Dropdown
                label='Category'
                data={this.state.category}
            />
            </View>
            <View style={[styles.time, styles.searchOption]}>
                {this.state.ingredientsDropdown}
            </View>
        </View>
        <View style={styles.searchButton}></View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listOptions: {
	    flex: 9
	},
	marginTop: {
	    height: 50
	},
	searchButton: {
	    flex: 1
	},
	searchOption: {
	    height: 40,
	    margin: 10
	},
	keyword: {
//	    backgroundColor: '#e7e7f3'
	},
	category: {
//	    backgroundColor: '#e7e7f3'
	},
	time: {
//	    backgroundColor: 'green'
	},

	input: {
		height: 40,
		backgroundColor: '#e7e7f3',
		marginBottom: 20,
		paddingBottom: 5,
		color: '#4d5054',
		paddingHorizontal: 10,
//		borderRadius: 30,
	},
});