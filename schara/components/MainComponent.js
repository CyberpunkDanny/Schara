import React, { Component } from 'react';
import { View, Platform } from 'react-native';

import Women from './WomenComponent';
import BangleDetail from './BangleDetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Help from './HelpComponent';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const WomenNavigator = createStackNavigator({
    Women: {screen: Women},
    BangleDetail: {screen: BangleDetail}
}, {
    initialRouteName: 'Women',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d6bd77'
        },
        headerTintColor: '#23221f',
        headerTitleStyle: {
            color: '#23221f'
        }
    }
});

const HomeNavigator = createStackNavigator({
    Schara: {screen: Home}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d6bd77'
        },
        headerTintColor: '#23221f',
        headerTitleStyle: {
            color: '#23221f'
        }
    }
});

const HelpNavigator = createStackNavigator({
    Help: {screen: Help}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d6bd77'
        },
        headerTintColor: '#23221f',
        headerTitleStyle: {
            color: '#23221f'
        }
    }
});

const AboutNavigator = createStackNavigator({
    About: {screen: About}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d6bd77'
        },
        headerTintColor: '#23221f',
        headerTitleStyle: {
            color: '#23221f'
        }
    }
});

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    
    Women: {
        screen: WomenNavigator,
        navigationOptions: {
            title: 'Women',
            drawerLabel: 'Women'
        }        
    },
    
    Help: {
        screen: HelpNavigator,
        navigationOptions: {
            title: 'Help',
            drawerLabel: 'Help'
        }
    },
    
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us'
        }
    }
    
}, {
    drawerBrackgroundColor: '#2d2a20'
});

class Main extends Component{    
    render(){
        return(
            <View style={ {flex: 1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight} }>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;