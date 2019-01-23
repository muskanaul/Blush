import React, {Component} from 'react';
import {View, Image, Subtitle, Heading, Divider, Title, Text} from '@shoutem/ui'

class Empty extends Component {
    render() {
        return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Image
                styleName="medium-square"
                source={require('./../../../assets/images/empty.png')}
            />
            <Divider/>
            <Heading styleName="bold h-center" style={{color: '#A9A9A9'}}>Oops!</Heading>
            <Title styleName="bold h-center" style={{color: '#696969'}}>Nothing to show</Title>
        </View>
        );
    }
}

export default Empty;