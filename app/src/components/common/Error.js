import React, {Component} from 'react';
import {View, Image, Subtitle, Heading, Divider, Title, Text} from '@shoutem/ui'
class Error extends Component {
    render() {
        return (
         <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
             <Image
                 styleName="medium-square"
                 source={require('./../../../assets/images/error.png')}
             />
             <Divider/>
             <Heading styleName="bold h-center" style={{color: '#A9A9A9'}}>Oops!</Heading>
             <Title styleName="bold h-center" style={{color: '#696969'}}>Something went wrong</Title>
         </View>
        );
    }
}

export default Error;