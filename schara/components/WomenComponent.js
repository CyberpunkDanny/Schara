import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { BANGLES } from '../shared/bangles';

class Women extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            bangles: BANGLES
        };
    }
    
    static navigationOptions = {
        title: 'Women'
    };
    
    render(){
        const renderWomenItem = ({item, index})=>{
            return(
                <ListItem key={index} title={item.name} subtitle={item.description} hideChevron={true} leftAvatar={ {source: require('../shared/images/1.jpg')} } onPress={()=>navigate('BangleDetail', {bangleId: item.id})} />
            );
        }; 

        const { navigate } = this.props.navigation;
        
        return(
            <FlatList data={this.state.bangles} renderItem={renderWomenItem} keyExtractor={item=>item.id.toString()} />
        );        
    }
}

export default Women;