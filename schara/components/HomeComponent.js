import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {Card} from 'react-native-elements';
import { BANGLES } from '../shared/bangles';

function RenderItem({item}){
    if(item !== null){
        return(
            <Card featuredTitle={item.name} image={ require('../shared/images/1.jpg')}>
                <Text style={ {margin: 10} }>
                    {item.description}
                </Text>
            </Card>
        );
    }
    else return(<Text></Text>);
}

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            bangles: BANGLES
        };
    }
    
    static navigationOptions = {
        title: 'Home'
    };

    render(){
        return(
            <ScrollView>
                <RenderItem item={this.state.bangles.filter((bangle)=>bangle.label === 'Selling Fast')[0]} />
                <RenderItem item={this.state.bangles.filter((bangle)=>bangle.label === 'Selling Fast')[0]} />
                <RenderItem item={this.state.bangles.filter((bangle)=>bangle.label === 'Selling Fast')[0]} />
            </ScrollView>
        );
    }
}

export default Home;