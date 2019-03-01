import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, Animated, Dimensions, Alert, AsyncStorage } from 'react-native';

var {height, width} = Dimensions.get('window')
export default class Spash extends Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        logoOpacity: new Animated.Value(0),
        sloganMarginTop: new Animated.Value(height / 3)
    }
    async componentDidMount() {
        //Add animation here
        Animated.sequence([
            Animated.timing(this.state.logoOpacity, {
                toValue: 1,
                duration: 700,
            }),
            Animated.timing(this.state.sloganMarginTop, {
                toValue: 10,
                duration: 700,
            })
        ]).start(() => {
            //End of animation
            try {
                   let value = AsyncStorage.getItem('token').then((value1) => {
                   if (value1 != null){
                        this.props.navigation.navigate('Gateway');
                   }
                   else {
                        this.props.navigation.navigate("Login");
                  }
                   });
                } catch (error) {
                    Alert.alert(error.toString())
                }

        })
    }
    
    render() {
        return <View style={styles.container}>
            <Animated.Image source={require('../../Dinner.png')}
                style={{...styles.logo, opacity: this.state.logoOpacity}}>
                
            </Animated.Image>
            <Animated.Text style={{...styles.slogan, opacity: this.state.logoOpacity,
                                    marginTop: this.state.sloganMarginTop}}>
                    Share your recipes to everyone!
            </Animated.Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 130 / 2,
    },
    slogan: {
        fontSize: 15,
    }
})