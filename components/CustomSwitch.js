import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const CustomSwitch = props => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchText}>{props.children}</Text>
      <Switch value={props.value} onValueChange={props.onChange}
            trackColor={{true: Colors.primaryColor, false: Colors.grayColor}} thumbColor={Colors.whiteColor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 20
  },
  switchText: {
    // fontFamily: 'open-sans'
  }
});

export default CustomSwitch;
