import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data.js';
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const mealData = MEALS.filter(meal => meal.id === mealId)[0];

  return (
    <View style={styles.screen}>
      <Text>{mealData.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

MealDetailsScreen.navigationOptions = navdata => {
  const mealId = navdata.navigation.getParam('mealId');
  const mealData = MEALS.filter(meal => meal.id === mealId)[0];

  return {
    headerTitle: mealData.title,
    headerRight:  <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favorite' iconName='ios-star' onPress={() => console.log('Mark as Favorite!')}/>
    </HeaderButtons>
  }
}

export default MealDetailsScreen;
