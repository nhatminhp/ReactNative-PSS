import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, ListView, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Search extends React.Component {
	static navigationOptions = {
		header: null,
	}
	constructor(props) {
    	super(props);
    	this.state = {
            SelectedIngredients: [],
            SelectedCategory: '',
    		keyword: '',
    		category: [{
                value: 'Appetizer',
              }, {
                value: 'Main disk',
              }, {
                value: 'Dessert',
              }],
            ingredients:[{
                          id: 'Egg',
                          name: 'Egg',
                        }, {
                          id: 'Banana',
                          name: 'Banana',
                        }, {
                          id: 'Cauliflower',
                          name: 'Cauliflower',
                        }, {
                          id: 'Cannabis',
                          name: 'Cannabis',
                        }, {
                          id: 'Carrot',
                          name: 'Carrot',
                        }, {
                          id: 'Minced Pork',
                          name: 'Minced Pork',
                        }, {
                          id: 'Mozzarella',
                          name: 'Mozzarella',
                        }, {
                          id: 'Sausage',
                          name: 'Sausage',
                        }, {
                          id: 'hot dog',
                          name: 'hot dog',
                        }, {
                          id: 'wine',
                          name: 'wine',
                        }, {
                          id: 'Chicken',
                          name: 'Chicken',
                        }, {
                          id: 'Bread',
                          name: 'Bread',
                        }],
              ingredientsDropdown: [],
              categorySelected:[],
              ingredientsSelected: [],
        }
        this.onSelectedIngredientsChange = this.onSelectedIngredientsChange.bind(this);
        this.test = this.test.bind(this);
    }
    test(SelectedIngredients) {
        let a='';
        for(var i=0,j=this.state.SelectedIngredients.length;i<j;i++){
            a+=this.state.SelectedIngredients[i];
        }
        Alert.alert(a+this.state.SelectedCategory+this.state.keyword);
    }
    onSelectedIngredientsChange(SelectedIngredients) {
        this.setState({ SelectedIngredients });
    };
  render() {
    return (
      <KeyboardAwareScrollView behavior="padding" style={styles.container}>
        <View style={styles.listOptions}>
            <View style={styles.marginTop}></View>
            <View style={[styles.keyword, styles.searchOption]}>
                <TextField
                    label="Keyword"
                    baseColor="black"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(keyword) => this.setState({keyword})}
                />
            </View>
            <View style={[styles.searchOption]}>
                <Dropdown
                    label='Category'
                    baseColor='black'
                    data={this.state.category}
                    onChangeText={(SelectedCategory) => this.setState({SelectedCategory})}
                />
            </View>
            <KeyboardAwareScrollView style={[styles.searchOption]}>
                <MultiSelect
                      items={this.state.ingredients}
                      uniqueKey="id"
                      ref={(component) => { this.multiSelect = component }}
                      onSelectedItemsChange={this.onSelectedIngredientsChange}
                      selectedItems={this.state.SelectedIngredients}
                      selectText="Select Ingredients"
                      searchInputPlaceholderText="Search Ingredients..."
                      onChangeInput={ (text)=> console.log(text)}
                      // altFontFamily="Slab Serif"
                      tagRemoveIconColor="#CCC"
                      tagBorderColor="#CCC"
                      tagTextColor="#CCC"
                      selectedItemTextColor="#CCC"
                      selectedItemIconColor="#CCC"
                      itemTextColor="#000"
                      displayKey="name"
                      searchInputStyle={{ color: '#CCC' }}
                      hideSubmitButton={true}
                      // fontFamily="Slab Serif"
                      fontSize={17}
                      textColor="black"
                />
                </KeyboardAwareScrollView>
        </View>
        <View style={styles.searchButton}>
            <TouchableOpacity style={styles.button} onPress={()=>this.test()}>
                <Text>
                    Search for recipe
                </Text>
            </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listOptions: {
	    flex: 5,
	    height: 400
	},
	marginTop: {
	    height: 50
	},
	searchButton: {
	    flex: 1,
	    alignItems: 'center'
	},
	button: {
	    backgroundColor: '#52E8FF',
        padding:20,
        marginBottom: 50,
        borderRadius: 50,
        width: 250,
        alignItems: 'center'
	},
	searchOption: {
	    height: 55,
	    margin: 10,
	    paddingLeft:10,
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