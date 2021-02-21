import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, ImageBackground, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';

const MealItem = props => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' & Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }
  return (
    <View style={styles.mealItemContainer}>
      <TouchableComponent onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealImageContainer}}>
            <ImageBackground style={styles.mealBgImage} source={{uri: props.image}}>
              <View style={styles.mealTitleContainer}>
                <Text style={styles.mealTitle} numberOfLines={1}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetailContainer}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
    </TouchableComponent>
  </View>
  );
}

const styles = StyleSheet.create({
  mealItemContainer: {
    height: 200,
    width: '98%',
    backgroundColor: Colors.lightGrayColor,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealImageContainer: {
    height: '90%',
    width: '100%'
  },
  mealBgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  mealTitleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  mealTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Colors.whiteColor,
    textAlign: 'center'
  },
  mealDetailContainer: {
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default MealItem;
