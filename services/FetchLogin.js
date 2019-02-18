//import {Alert, AsyncStorage} from 'react-native';
//export const getUserInfo(email,password): Promise<string> {
//        fetch('http://wonderdance-interaction.duckdns.org/comment', {
//              method: 'POST',
//              headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json',
//              },
//              body: JSON.stringify({
////                email: email,
////                password: password,
//                  user_id: 1,
//                  video_id: 1,
//                  data: {
//                        content: '123'
//                  },
//              })
//            }).then((response) => response.json())
//                    .then((responseJson) => {
//                        AsyncStorage.multiSet([
//                          ["token", responseJson.comment_id.toString()],
//                        ])
//                        Alert.alert(responseJson.comment_id.toString());
//                        return responseJson.comment_id.toString();
//                    })
//                    .catch((error) => {
//                      return Alert.alert("error3");
//                    });
//}
//
