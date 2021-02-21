import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vectoricons';

import Colors from '../constants/Colors';

const HeaderButton = props => {
  return (
    < HeaderButton {...props} IconComponent={Ionicons} iconSize={22} color={Platform.OS === 'android' ? Colors.whiteColor : Colors.primaryColor }/>
  )
}

export HeaderButton;
