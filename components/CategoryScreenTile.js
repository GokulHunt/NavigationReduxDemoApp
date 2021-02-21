import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform} from 'react-native';
import Colors from '../constants/Colors';

const CategoryScreenTile = props => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={styles.gridItemTouchable} onPress={props.onSelect}>
        <View style={{...styles.gridItemContainer, ...{ backgroundColor: props.color }}}>
          <Text style={styles.gridItemText} numOfLines={2}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    width: '42%',
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  gridItemTouchable: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  gridItemContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: Colors.grayColor,
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.26,
    elevation: 4

  },
  gridItemText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right'
  }
});

export default CategoryScreenTile;
