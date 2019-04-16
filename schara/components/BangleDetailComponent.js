import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { BANGLES } from '../shared/bangles';


class BangleDetail extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            bangles: BANGLES,
            currentBangle: null
        };
    }
    
    static navigationOptions = {
        title: 'Bangle'
    }

    render(){
        
        const bangleId = this.props.navigation.getParam('bangleId', '');
        
        if(bangleId != null){
            
            const bangle = this.state.bangles[+bangleId];
            
            this.setState({currentBangle: bangle});
            
            return (
                <Card featuredTitle={bangle.name} image={ require('../shared/images/1.jpg')}>
                    <Text style={ {margin: 10} }>
                        {bangle.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(
                <View></View>
            );
        }   
    }
    
}

export default BangleDetail;