import React, {Component} from 'react';
import {View, Text} from 'react-native';

class About extends Component{
    
    static navigationOptions = {
        title: 'About Schara'
    };

    render(){
        return(
            <View>
                <Text>About</Text>
            </View>
        );
    }
}

export default About;