import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView,Dimensions,ScrollView,Button, Modal, Alert} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-material-textfield';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import StarRating from 'react-native-star-rating';
import { DialogComponent }from 'react-native-dialog-component';

var {height, width} = Dimensions.get('window');

export default class Reviews extends React.Component {
	static navigationOptions = {
		header: null,
	}
	constructor(props) {
    	super(props);
    	this.state = {
    	    num_of_reviews: '100 reviews',
    	    modalVisible: false,
    	    starCount: 0,
    	    myReview: ''
        }
        this.handleComment=this.handleComment.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleComment() {
        this.setState(
            {visible:false}
        );
    }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
    handleSubmit() {
        Alert.alert(this.state.starCount.toString()+this.state.myReview);
        this.setState({modalVisible: false});
        this.props.navigation.navigate('DetailRecipe');
    }
  render() {
    return (
          <View behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Header
                    leftComponent={{ icon: 'search', color: '#fff',onPress: ()=>this.props.navigation.navigate('Search') }}
                    centerComponent={{text:'REVIEWS',style:{color:'#FFF',fontSize:20}}}
                    rightComponent={<Menu
                                          ref={this.setMenuRef}
                                          button={<Icon name='menu' color='white' onPress={this.showMenu}/>}
                                        >
                                          <MenuItem onPress={this.hideMenu}>Home</MenuItem>
                                          <MenuItem onPress={this.hideMenu}>Log out</MenuItem>
                                    </Menu>}
                />
            </View>
            <View style={styles.infoView}>
                <Text style={{color: '#e56b00', fontWeight: 'bold', fontSize: 18}}>{this.state.num_of_reviews}</Text>
            </View>
            <ScrollView style={styles.reviewsList}>
                <View style={styles.reviewBox}>
                    <View style={styles.name}>
                        <Text style={styles.reviewer}>
                            Nguyen Son
                        </Text>
                    </View>
                    <View style={styles.rate}>
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
                    <View style={styles.review}>
                        <Text>
                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                        </Text>
                    </View>
                </View>
                <View style={styles.reviewBox}>
                    <View style={styles.name}>
                        <Text style={styles.reviewer}>
                            Nguyen Son
                        </Text>
                    </View>
                    <View style={styles.rate}>
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
                    <View style={styles.review}>
                        <Text>
                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                        </Text>
                    </View>
                </View>
                <View style={styles.reviewBox}>
                    <View style={styles.name}>
                        <Text style={styles.reviewer}>
                            Nguyen Son
                        </Text>
                    </View>
                    <View style={styles.rate}>
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
                    <View style={styles.review}>
                        <Text>
                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                        </Text>
                    </View>
                </View>
                <View style={styles.reviewBox}>
                    <View style={styles.name}>
                        <Text style={styles.reviewer}>
                            Nguyen Son
                        </Text>
                    </View>
                    <View style={styles.rate}>
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
                    <View style={styles.review}>
                        <Text>
                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                        </Text>
                    </View>
                </View>
                <View style={styles.reviewBox}>
                    <View style={styles.name}>
                        <Text style={styles.reviewer}>
                            Nguyen Son
                        </Text>
                    </View>
                    <View style={styles.rate}>
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
                    <View style={styles.review}>
                        <Text>
                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.comment}>
                <View style={styles.commentBox}>
                    <TextInput
                        label="Keyword"
                        baseColor="black"
                        returnKeyType="next"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Write your reviews"
                        maxLength = {100}
                        onChangeText={(myReview) => this.setState({myReview})}
                        style={{paddingLeft: 15}}
                    />
                </View>
                <TouchableOpacity style={styles.commentButton}  onPress={() => {this.setState({modalVisible:true});}}>
                    <Text style={{fontSize:20}}>Submit</Text>
                </TouchableOpacity>
            </View>
                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    >
                    <View style={{marginTop: 22, flex:1}}>
                        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                            <StarRating
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'#ff7e1a'}
                            />
                        </View>
                        <View style={styles.modalButton}>
                            <TouchableOpacity style={styles.cancelButton}  onPress={() => {this.setState({modalVisible:false});}}>
                                <Text style={{fontSize:20}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.submitButton}  onPress={() => {this.handleSubmit()}}>
                                <Text style={{fontSize:20}}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  </Modal>
          </View>
        );
  }
}

const styles = StyleSheet.create({
    stars: {
	    width: width/3,
	},
	container: {
		flex: 1,
	},
	logoContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginBottom: 12
    },
    infoView: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reviewsList: {
        flex: 10,
    },
    reviewer: {
        fontSize: 18,
        color:'black',
        fontWeight: '600'
    },
    comment: {
        height: 50,
        flexDirection: 'row',
    },
    commentBox: {
        flex: 6,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: 'black'
    },
    commentButton: {
        flex: 3,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7caeff'
    },
    reviewBox: {
        height: 130,
        paddingLeft: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        marginBottom: 5,
        marginLeft: width/30,
        marginRight: width/30,
    },
    name:{
        flex: 30,
    },
    rate: {
        flex: 20,
        width: width/3
    },
    review: {
        flex: 80,
    },
    cancelButton: {
        flex: 1,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cc2204',
        height: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    submitButton: {
        flex: 1,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#08d642',
        height: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    modalButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});