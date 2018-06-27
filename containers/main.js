import React from 'react';
import { AsyncStorage, StyleSheet, StatusBar, ScrollView, Dimensions, Alert, Modal, TouchableHighlight } from 'react-native';
import Expo from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, List, ListItem} from 'native-base';

import DateModal from './../components/dateModal';
import TiffinsModal from './../components/tiffinsModal';
// import TypeModal from './../components/typeModal';
import { connect } from 'react-redux';
import {
    compToggle,
    compToggle2,
    totalCalPrice,
    totalCalTiffins,
    submitVal,
    setTiffins
  } from './../actions/commonActions';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  async componentDidMount(){
      console.log(this.props)
    try {
      const value = await AsyncStorage.getItem('tiffinsArray');
      if (value !== null){
        // We have data!!
        console.log(value);

        // JSON.parse(value
        this.props.setTiffins([]);
      }
    } catch (error) {
      console.log("Error in fetching data from asyncStorage!");
      // Error retrieving data
    }
  }

  render() {
    return(
    <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
       
        <Content>
          <View style={styles.upperDoc}>  
            <View style={styles.dashItems}>
              
              <Text>
                #Tiffin:
              </Text>

            </View>

            <View style={styles.dashItems}>
              
              <Text>
                Rs
              </Text>

            </View>
            
          </View>

          <Button onPress={()=>{
            this.props.compToggle2("dateModal", true);
            console.log("qwe");
          }}>
            <Icon name='add' />
          </Button>

          <DateModal/>
          {/* <TiffinsModal/> */}
          {/* <TypeModal/> */}

        
          <ScrollView style={styles.scrollDiv}>
            <List>
              
                {
                  this.props.tiffins.map((item, index) => {
                    return(
                      <ListItem key={index}>
                        <Text>{item.quantity} | {item.date} | {item.type} | Rs. {item.price} </Text>
                        <View style={styles.listButtons}>
                          <Button small warning rounded>
                            <Icon type="FontAwesome" name='pencil' />
                          </Button>
        
                          <Button small danger rounded>
                            <Icon type="MaterialIcons" name='delete' />
                          </Button>      
                        </View>
                      </ListItem>   
                    )
                  })
                }
            </List>
          </ScrollView>
        </Content>
      </Container>
    )
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


const mapStateToProps = (state, ownProps) => {
    return {
      makeItVisible: state.app.makeItVisible,
      dateModal: state.app.dateModal,
      tiffins: state.ds
    }
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      compToggle2: (comp, val) => {
        dispatch(compToggle2(comp, val))
      },
      setTiffins: (data) => {
        dispatch(setTiffins(data))
      }
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Main);