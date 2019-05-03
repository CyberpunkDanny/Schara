import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Tile, Card, Button, Icon} from 'react-native-elements';
import { BANGLES } from '../shared/bangles';

var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            bangles: BANGLES
        };
    }
    
    static navigationOptions = {
        title: 'Schara'
    };

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={[styles.box, styles.box1]}></View>
                <View style={[styles.box, styles.box2]}></View>
                <View style={[styles.box, styles.box3]}></View>
            </ScrollView>
        );
    }
}

/*
const styles = StyleSheet.create({
    cardBox: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});

export default Home;