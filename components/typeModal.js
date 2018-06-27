import React from 'react';
import { AsyncStorage, StyleSheet, StatusBar, ScrollView, Dimensions, Alert, Modal, TouchableHighlight } from 'react-native';

import Expo from 'expo';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, List, ListItem} from 'native-base';

import { connect } from 'react-redux';
import {
  compToggle,
  compToggle2,
  totalCalPrice,
  totalCalTiffins,
  submitFinal
} from './../actions/commonActions';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.loadFont();
    this.state = {};
  }

  render(){
      return(

              <Modal
              animationType="slide"
              transparent={false}
              visible={this.props.tiffinTypeModal}
              onRequestClose={() => {
                alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22}}>
                <View>
         
        
                    <Button  onPress={()=>{this.setState({type: "veg", price: 70})}}>
                      <Text>Veg - Rs. 70</Text>
                    </Button>
        
                    <Button  onPress={()=>{this.setState({type: "non-veg", price: 170})}}>
                      <Text>Non-Veg - Rs. 170</Text>
                    </Button>
        
                    <Button danger onPress={() => {
                      this.props.compToggle2('tiffinTypeModal', false);
                      this.props.compToggle2('dateModal', false);
                      this.props.compToggle2('numberOfTiffinsModal', false);
                      this.props.submitVal();
                    }}>
                      <Text>Submit</Text>
                    </Button>                    
        
                </View>
              </View>
            </Modal>
         
      )
  }



}



const mapStateToProps = (state, ownProps) => {
  return {
    makeItVisible: state.app.makeItVisible,
    numberOfTiffinsModal: state.app.numberOfTiffinsModal,
    dateModal: state.app.dateModal,
    tiffinTypeModal: state.app.tiffinTypeModal


  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    compToggle2: (comp, val) => {
      dispatch(compToggle2(comp, val))
    },
    submitFinal: (comp, val) => {
      dispatch(submitFinal(comp, val))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
