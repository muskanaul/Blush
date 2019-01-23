import React, {Component} from 'react';
import {View, Image, Subtitle, Heading, Divider, Title, Text} from '@shoutem/ui'

class Loading extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Image
                    style={{
                        width: 100,
                        height: 100
                    }}
                    source={require('./../../../assets/images/loading-image.png')}
                />
                <Divider/>
                <Image
                    style={{
                        width: 150,
                        height: 50
                    }}
                    source={require('./../../../assets/images/loading-animation.gif')}
                />
            </View>
        );
    }
}

export default Loading;