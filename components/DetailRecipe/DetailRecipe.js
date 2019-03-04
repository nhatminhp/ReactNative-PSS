import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput,Dimensions,FlatList,TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-material-dropdown';
import {Header, Icon} from 'react-native-elements';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import StarRating from 'react-native-star-rating';
import { Table, Row, Rows } from 'react-native-table-component';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#fe7013',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#fe7013',
  stepIndicatorCurrentColor: '#fe7013',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#666666'
}
var {height, width} = Dimensions.get('window');
export default class SearchResult extends React.Component {
	static navigationOptions = {
		header: null,
	}
	constructor(props) {
    	super(props);
    	this.state = {
    	    name: 'Cabonara',
    	    description: 'Description Description Description Description Description Description Description description description description description description description description description description description ',
    	    category: 'Main disk',
    	    time: '15:00 min',
    	    ingredientsList: [
    	        [
                    '0.3',
                    'kg',
                    'spaghetty',
    	        ], [
    	            '0.5',
    	            'kg',
    	            'mozzaralla',
                ], [
    	            '0.5',
    	            'kg',
    	            'mozzaralla',
                ], [
    	            '0.5',
    	            'kg',
    	            'mozzaralla',
    	        ], [
    	            '0.1',
    	            'kg',
    	            'bacon',
    	        ]
    	    ],
    	    steps: [
    	        {
                    'title': 'step 1',
                    'body': 'add eggadd eggadd eggadd eggadd eggadd egg'
    	        },{
                    'title': 'step 2',
                    'body': 'add floweradd floweradd floweradd floweradd floweradd flower'
    	        },{
                    'title': 'step 3',
                    'body': 'add fish sauceadd fish sauceadd fish sauceadd fish sauceadd fish sauce'
    	        },{
                      'title': 'step 4',
                      'body': 'add fish sauceadd fish sauceadd fish sauceadd fish sauceadd fish sauce'
                },
    	    ],

        }
        this.viewabilityConfig = {itemVisiblePercentThreshold: 40}

        this.setMenuRef = this.setMenuRef.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.renderPage = this.renderPage.bind(this);
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


  renderPage = (rowData) => {
    const item = rowData.item
    return (
      <View style={styles.rowItem}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    )
  }



  render() {
    return (
      <ScrollView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Header
                    leftComponent={{ icon: 'search', color: '#fff',onPress: ()=>this.props.navigation.navigate('Search') }}
                    centerComponent={{text:'SEARCH RESULT',style:{color:'#FFF',fontSize:20}}}
                    rightComponent={<Menu
                                          ref={this.setMenuRef}
                                          button={<Icon name='menu' color='white' onPress={this.showMenu}/>}
                                        >
                                          <MenuItem onPress={this.hideMenu}>Home</MenuItem>
                                          <MenuItem onPress={this.hideMenu}>Log out</MenuItem>

                                    </Menu>}
                />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.image}>
                    <Image source={require('../../recipe.jpg')} style={styles.recipeImage}/>
                </View>
                <View style={styles.name}><Text style={[styles.nameText]}>{this.state.name}</Text></View>
                <View style={styles.rating}>
                    <Text style={styles.category}>{this.state.category}</Text>
                    <View style={styles.starView}>
                        <StarRating
                            disabled={true}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={4}
                            starSize={20}
//                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'#ff7e1a'}
                            style={styles.stars}
                            />
                    </View>
                </View>
                <View style={styles.description}>
                    <Text adjustsFontSizeToFit minimumFontScale={.5} allowFontScaling style={styles.centerText}>
                        {this.state.description}
                    </Text>
                </View>
                <View style={styles.time}>
                    <Text style={styles.lightBold}>Cooking time: {this.state.time}</Text>
                </View>
                <View style={styles.ingredientsList} adjustsFontSizeToFit minimumFontScale={.5} allowFontScaling>
                    <Text style={styles.ingredientsTitle}>
                        Ingredients
                    </Text>
                    <Table style={{paddingLeft:10}} borderStyle={{borderWidth: 0, borderColor: '#ffffff'}} >
                          <Rows data={this.state.ingredientsList} widthArr={[40,30,200]} textStyle={styles.text}/>
                    </Table>
                </View>
                <View style={styles.steps}>
                    <Text style={styles.ingredientsTitle}>
                        Steps
                    </Text>
                    <ProgressSteps>
                        <ProgressStep label="First Step">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 1!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Second Step">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Third Step" finishBtnText=''>
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>
            </View>
            <TouchableOpacity style={styles.listReview} onPress={()=>this.props.navigation.navigate('Reviews')}>
                <Text style={{color: 'white'}} >Reviews</Text>
            </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: { margin: 6 },
	logoContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		marginBottom: 12
	},
	formContainer: {
	    flex: 12,
	},
	image: {
	    height: width,
	    backgroundColor: 'black'
	},
	rating: {
	    alignItems: 'center',
	    flexDirection: 'row'
	},
	stars: {
	    width: width/3,
	},
	name: {
	    alignItems: 'center',
	    height: 30,
	},
	nameText: {
	    fontFamily: 'Source Sans Pro',
	    fontSize: 22
	},
	boldText: {
	    fontWeight: 'bold',
	    fontSize: 20
	},
	lightBold: {
	    fontWeight: 'bold',
	    fontSize: 14
	},
	description: {
	    alignItems: 'center',
	},
	category: {
        textAlign: 'left',
        flex:1,
        paddingLeft: 15,
        fontWeight: 'bold'
	},
	time: {
	    paddingLeft: 15
	},
	ingredientsList: {
//	    height: 80,
	    backgroundColor: 'white'
	},
	recipeImage: {
        flex: 1,
        width: null,
        height: null,
	    resizeMode: 'contain'
	},
	starView: {
        alignItems: 'flex-end',
        flex:1,
        paddingRight: 20
	},
	ingredientsTitle: {
	    color: '#8fe804',
	    fontSize: 20,
	    paddingLeft: 15
	},
	centerText: {textAlign: 'center'},
	steps: {
	},
	listReview:{
	    alignItems: 'center',
	    backgroundColor: '#5e9af9',
	    paddingBottom: 20,
	    paddingTop: 20,
	},
});