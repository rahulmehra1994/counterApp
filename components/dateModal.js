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
  submitVal
} from './../actions/commonActions';

class DateModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.debug("csas", this.props);
  }

  render(){
    return(
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.dateModal}
        onRequestClose={() => {
          alert('Modal has been closed.');
      }}>
      <View style={{marginTop: 22}}>
        <View>
          <Text>Date</Text>


            <Button  onPress={()=>{}}>
              <Text>Today</Text>
            </Button>

            <Button danger onPress={() => {
              this.props.compToggle('dateModal', false);
              this.props.compToggle('tiffinTypeModal', true);

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
    dateModal: state.app.dateModal
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    compToggle2: (comp, val) => {
      dispatch(compToggle2(comp, val))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DateModal);


