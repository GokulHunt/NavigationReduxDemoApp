import React from 'react';
import { Text, View, Button, FlatList, StyleSheet} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';

import MealList from '../components/MealList';


const CategoryMealsScreen = props => {
  const catid = props.navigation.getParam('CategoryId');
  const categoryMeals =  MEALS.filter(meal => meal.categoryIds.indexOf(catid) >= 0);

  return (
    <View style={styles.screen}>
      <MealList listData={categoryMeals} navigation={props.navigation}/>
    </View>
  );
}

CategoryMealsScreen.navigationOptions = navdata => {
  const catid = navdata.navigation.getParam('CategoryId');
  const category = CATEGORIES.find(cat => cat.id === catid);

  return {
    headerTitle: category.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
