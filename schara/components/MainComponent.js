import React, { Component } from 'react';
import { View, Platform } from 'react-native';

import Women from './WomenComponent';
import BangleDetail from './BangleDetailComponent';
import { BANGLES } from '../shared/bangles';

import { createStackNavigator } from 'react-navigation';

const WomenNavigator = createStackNavigator({
    Women: {screen: Women},
    BangleDetail: {screen: BangleDetail}
}, {
    initialRoutename: 'Women',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#0ff'
        },
        headerTintColor: '#0ff',
        headerTitleStyle: {
            color: '#0ff'
        }
    }
});

class Main extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            bangles: BANGLES,
            selectedBangle: null
        };
    }
    
    render(){
        return(
            <View style={ {flex: 1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight} }>
                <WomenNavigator />
            </View>
        );
    }
}

export default Main;