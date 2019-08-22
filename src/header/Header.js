import React from 'react';
import { View, Text } from 'react-native';
import styles from './HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import headerText from './HeaderStyle';



const Header = ( props ) => {
    const { mainheaderText, mainheaderView, LIView, RIView } = styles;

    const leftIcon = <Icon name = "menu" size = {20} color = "red" />;
    const rightIcon = <Icon name = "menu" size = {20} color = "red" />;
    return (
        <View style={ mainheaderView }>
            <View style={ LIView }>
                <Text>
                    {leftIcon}
                </Text>
            </View>
            <View>
                <Text style={ mainheaderText }>
                    { props.headerText }
                </Text>
            </View>
            <View style = {RIView}>
                <Text>
                    {rightIcon}
                </Text>
            </View>
        </View>
    )
};




export default Header;




