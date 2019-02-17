import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, Animated, Dimensions } from 'react-native';

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
                duration: 1000,
            }),
            Animated.timing(this.state.sloganMarginTop, {
                toValue: 10,
                duration: 1000,
            })
        ]).start(() => {
            //End of animation
            this.props.navigation.navigate("Login")
        })
    }
    
    render() {
        return <View style={styles.container}>
            <Animated.Image source={require('../Dinner.png')}
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
        backgroundColor: '#3498db',
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