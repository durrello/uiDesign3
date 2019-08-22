import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ListDetailsStyle'

const ListDetails = (props) => {
    const leftIcon = <Icon name = "menu" size = {20} color="black" />;
    const rightIcon = <Icon name = "chevron-down" size = {20} color = "black" />; 
    const {l1mainView, LIview, RIview, textStyle} = styles;
    return (
        <View >
            <View style = {l1mainView}>
                <View style = {LIview}>
               <Image style = {{width:50, height: 40, borderRadius: 90,}}
               source = {require("../images/li.png")} 
                />
                    <Text>
                        {leftIcon}
                    </Text>
                </View>
                <View>    
                    <Text style = {textStyle}>
                       {props.ListDetails}
                    </Text>
                </View>
                <View style = {RIview}>
                    <Text>
                        {rightIcon}
                    </Text>
                </View>
            </View>
        </View>
    )
}



export default ListDetails
