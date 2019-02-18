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
  if (this.state.isLoading) {
        //Loading View while data is loading
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
        );
      }
    return (
          <View style={styles.viewStyle}>
            <SearchBar
              round
              searchIcon={{ size: 24 }}
//              onChangeText={text => this.SearchFilterFunction(text)}
//              onClear={text => this.SearchFilterFunction('')}
              placeholder="Type Here..."
              />
            <ListView
              dataSource={this.state.dataSource}
//              renderSeparator={this.ListViewItemSeparator}
//              renderRow={rowData => (
//                <Text style={styles.textStyle}>{rowData.title}</Text>
//              )}
              enableEmptySections={true}
              style={{ marginTop: 10 }}
            />
          </View>
//      <KeyboardAvoidingView behavior="padding" style={styles.container}>
//      <View style={styles.logoContainer}>
//            <Image style={styles.inputIcon} source={{uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png'}}/>
//                <TextInput style={styles.inputs}
//                              placeholder="Password"
//                              underlineColorAndroid='transparent'
//                              onChangeText={(keyword) => this.setState({keyword})}/>
//	  </View>
//	    <View style={styles.formContainer}>
//            <View style={styles.recipes}>
//                    <Image style={styles.picture} source={{uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'}}/>
//                <View style={styles.info}>
//                    <View style={styles.name}><Text style={styles.nameText}>Recipe1</Text></View>
//                    <View style={styles.description}><Text style={styles.descriptionText}>Description1</Text></View>
//                 </View>
//
//            </View>
//            <View style={styles.recipes}>
//                    <Image style={styles.picture} source={{uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'}}/>
//                <View style={styles.info}>
//                    <View style={styles.name}><Text style={styles.nameText}>Recipe1</Text></View>
//                    <View style={styles.description}><Text style={styles.descriptionText}>Description1</Text></View>
//                 </View>
//
//            </View>
//            <View style={styles.recipes}>
//                    <Image style={styles.picture} source={{uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'}}/>
//                <View style={styles.info}>
//                    <View style={styles.name}><Text style={styles.nameText}>Recipe1</Text></View>
//                    <View style={styles.description}><Text style={styles.descriptionText}>Description1</Text></View>
//                 </View>
//
//            </View>
//
//		</View>
//      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 25,
  },
  textStyle: {
    padding: 10,
  },
    recipes: {
        height: 120,
        flexDirection: 'row',
        marginTop: 10
    },
    picture: {
        flex: 3,
        backgroundColor: 'black'
    },
    info: {
        flex: 7,
        flexDirection: 'column',
    },
    name: {
        flex: 1,
        backgroundColor: 'pink',
        paddingLeft: 20,
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        flex: 3,
        backgroundColor: 'green',
        paddingLeft: 20,
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