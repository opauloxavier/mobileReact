import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

export default function AlbumDetail({ album }) {
    const { thumbnailStyle, textContainerStyle, imageStyle } = styles;
    const { title, artist, thumbnail_image, image, url } = album;

    return (<Card>
                <CardSection>
                    <View>
                        <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                    </View>
                    <View style={textContainerStyle}>
                        <Text> 
                            {title}
                        </Text>
                        <Text>
                            {artist}
                        </Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{ uri: image }} />
                </CardSection>
                <CardSection>
                    <CustomButton onPress={() => Linking.openURL(url)}>
                        Buy me!
                    </CustomButton>
                </CardSection>
            </Card>);
}


const styles = {
    thumbnailStyle: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 10
    },
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonStyle: {
        flexDirection: 'row',
        width: null
    }
};
