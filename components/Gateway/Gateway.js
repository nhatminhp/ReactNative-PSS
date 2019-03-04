import React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {Header, Icon} from 'react-native-elements';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class Gateway extends React.Component {
	static navigationOptions = {
		header: null,
	}
	constructor(props) {
    	super(props);
    	this.state = {
        }

        this.setMenuRef = this.setMenuRef.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }
    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
  render() {
    return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.container}>
                  <View style={styles.logoContainer}>
                      <Header
                          centerComponent={{text:'HOME',style:{color:'#FFF',fontSize:20}}}
                          rightComponent={<Menu
                                            ref={this.setMenuRef}
                                            button={<Icon name='menu' color='white' onPress={this.showMenu}/>}
                                          >
                                            <MenuItem onPress={this.hideMenu}>Log out</MenuItem>
                                          </Menu>}
                      />
                  </View>
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
    logoContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		marginBottom: 12
	},
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