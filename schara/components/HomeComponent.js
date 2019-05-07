import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Tile, Card, Button, Icon, CardImg, CardImgOverlay} from 'react-native-elements';
import { BANGLES } from '../shared/bangles';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
 
var boxCount = 3;
var boxWidth = deviceWidth / boxCount;
var boxHeight = deviceHeight / (boxCount * 2);


const Carousel = (props) => {
    var { images } =  props;
    
    if(images && images.length){
        return(
            <View>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                    {images.map((image)=> <Image source={image.source}/>)}
                </ScrollView>
            </View>
        );
    }
    else return null;
}


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
            <ScrollView style={{backgroundColor: '#e8dcc9'}}>
                
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 5}}>
                    <View style={{width: deviceWidth/3.2, height: deviceHeight/8, backgroundColor: 'powderblue'}}>
                        <Image source={require('../shared/images/saleBox.jpg')} style={{width: deviceWidth/3.2, height: deviceHeight/8, position: 'absolute'}}/>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: deviceHeight/10,  textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center'}}>{'SALE'}</Text>
                    </View>
                    <View style={{width: deviceWidth/3.2, height: deviceHeight/8, backgroundColor: 'skyblue'}}>
                        <Image source={require('../shared/images/bride.jpg')} style={{width: deviceWidth/3.2, height: deviceHeight/8, position: 'absolute'}}/>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: deviceHeight/10,  textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center'}}>{'WOMEN'}</Text>
                    </View>
                    <View style={{width: deviceWidth/3.2, height: deviceHeight/8, backgroundColor: 'steelblue'}}>
                        <Image source={require('../shared/images/girl.jpg')} style={{width: deviceWidth/3.2, height: deviceHeight/8, position: 'absolute'}}/>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: deviceHeight/10,  textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center'}}>{'GIRLS'}</Text>
                    </View>
                </View>
                
                
                <ScrollView contentContainerStyle={{flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 10}}>
                    <View style={{width: deviceWidth, height: deviceHeight/3.2, backgroundColor: '#e8dcc9' }}>
                        <Image source={require('../shared/images/bangleOne.jpg')} style={{width: deviceWidth, height: deviceHeight/3.5}}/>
                    </View>
                    <View style={{width: deviceWidth, height: deviceHeight/3.2, backgroundColor: '#e8dcc9' }}>
                        <Tile featured imageSrc={require('../shared/images/bangleTwo.jpg')} title={'CASUAL WEAR'} caption={'Most Popular'} titleStyle={{fontFamily: 'notoserif'}} imageContainerStyle={{width: deviceWidth, height: deviceHeight/3.5}} />
                    </View>
                    <View style={{width: deviceWidth, height: deviceHeight/3.2, backgroundColor: '#e8dcc9' }}>
                        <Tile featured imageSrc={require('../shared/images/wedding.jpg')} title={'Wedding Collection'} caption={'UPTO 50% OFF'} titleStyle={{fontFamily: 'notoserif'}} imageContainerStyle={{width: deviceWidth, height: deviceHeight/3.5}} />
                    </View>
                    <View style={{width: deviceWidth, height: deviceHeight/3.2, backgroundColor: '#e8dcc9' }}>
                        <Tile imageSrc={require('../shared/images/bangleOne.jpg')} imageContainerStyle={{width: deviceWidth, height: deviceHeight/3.5}} />
                    </View>
                </ScrollView>
            
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
    flexDirection: 'row'
  },
  box: {
    width: boxWidth
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