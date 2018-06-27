import React from 'react';
import { AsyncStorage, StyleSheet, StatusBar, ScrollView, Dimensions, Alert, Modal, TouchableHighlight } from 'react-native';
import Expo from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, List, ListItem} from 'native-base';
import { Provider } from 'react-redux';
import store from './store/index';

import Main from './containers/main';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.loadFont();
    this.state = {makeItVisible: false, tiffins: [], numberOfTiffinsModal: false, dateModal: false, tiffinTypeModal: false,};
  }

  async loadFont(){
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    }).then(()=>{
      this.setState({makeItVisible: true});
    });
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.page}>
          
          <StatusBar hidden={true} />

          

          {
              (this.state.makeItVisible)?
                <Main/>
              :
                  null
          } 

        
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 30
  },
  page: {
    flex: 1,
  },
  container:{
    flex: 1,
  },
  upperDoc:{
    height: Dimensions.get('window').height * 0.25,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dashItems:{
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  },
  downDocker:{
    // flex: 2, backgroundColor: 'skyblue'
  },
  scrollDiv:{
    height: (Dimensions.get('window').height * 0.75) - 30,
    backgroundColor: 'white'
  },
  listItem:{
    height: 40,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginTop: 5
  },
  listButtons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  floatButton:{
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#ee6e73',                                    
    position: 'absolute',                                          
    top: (Dimensions.get('window').height * 0.65),                                                    
    right: 10, 
  }
});



