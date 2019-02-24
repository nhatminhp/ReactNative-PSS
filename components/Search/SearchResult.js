import React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-material-dropdown';
import {Header, Icon} from 'react-native-elements';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class SearchResult extends React.Component {
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
      <KeyboardAwareScrollView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
	    <Header
	        leftComponent={{ icon: 'search', color: '#fff',onPress: ()=>this.props.navigation.navigate('Search') }}
            centerComponent={{text:'SEARCH RESULT',style:{color:'#FFF',fontSize:20}}}
            rightComponent={<Menu
                                      ref={this.setMenuRef}
                                      button={<Icon name='menu' onPress={this.showMenu}/>}
                                    >
                                      <MenuItem onPress={this.hideMenu}>Home</MenuItem>
                                      <MenuItem onPress={this.hideMenu}>Log out</MenuItem>

                                    </Menu>}
        />
	  </View>
        <View style={styles.formContainer}>
            <View style={styles.recipes}>
                <Image style={styles.picture} source={{uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'}}/>
                <View style={styles.info}>
                    <View style={styles.name}><Text style={styles.nameText}>Recipe1</Text></View>
                    <View style={styles.description}><Text style={styles.descriptionText}>Description1</Text></View>
                 </View>

            </View>
            <View style={styles.recipes}>
                <Image style={styles.picture} source={{uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'}}/>
                <View style={styles.info}>
                    <View style={styles.name}><Text style={styles.nameText}>Recipe1</Text></View>
                    <View style={styles.description}><Text style={styles.descriptionText}>Description1</Text></View>
                 </View>

            </View>
            <View style={styles.recipes}>
                <Image style={styles.picture} source={{uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'}}/>
                <View style={styles.info}>
                    <View style={styles.name}><Text style={styles.nameText}>Recipe1</Text></View>
                    <View style={styles.description}><Text style={styles.descriptionText}>Description1</Text></View>
                 </View>
            </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
    recipes: {
        height: 120,
        flexDirection: 'row',
        marginTop: 10
    },
    picture: {
        flex: 3,
    },
    info: {
        flex: 7,
        flexDirection: 'column',
    },
    name: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        flex: 3,
        paddingLeft: 10,
        paddingTop: 5,
    },
    descriptionText: {
        fontSize: 14,
    },
	container: {
		flex: 1,
//		backgroundColor: 'blue'
	},
	logoContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		marginBottom: 12
	},
	title: {
        color: '#ffffff',
        fontSize: 28,
        marginTop: 10,
        textAlign: 'center',
	},
	formContainer: {
	    flex: 12,
	},
	inputIcon:{
        flex: 1,
        backgroundColor: 'white'
    },
    inputs:{
        flex:9,
    },
});