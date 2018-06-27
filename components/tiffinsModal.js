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
  submitFinal,
  setTiffinQty
} from './../actions/commonActions';


class TiffinsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.numberOfTiffinsModal}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Number of Tiffins</Text>
  
              <Button onPress={()=>{this.props.setTiffinQty(1)}}>
                <Text>1</Text>
              </Button>
   
              <Button onPress={()=>{this.props.setTiffinQty(2)}}>
                <Text>2</Text>
              </Button>
                
              <Button onPress={()=>{this.props.setTiffinQty(3)}}>
                <Text>3</Text>
              </Button>              
      
              <Button onPress={()=>{this.props.setTiffinQty(4)}}>
                <Text>4</Text>
              </Button>

              <Button danger onPress={() => {
                this.compToggle2('numberOfTiffinsModal', true);
                this.compToggle2('dateModal', false);
              }}>
                <Text>Next</Text>
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
    

  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    compToggle2: (comp, val) => {
      dispatch(compToggle2(comp, val))
    },
    setTiffinQty: (val) => {
      dispatch(setTiffinQty(val))
    },

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TiffinsModal);
