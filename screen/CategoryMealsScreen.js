import React from 'react';
import { Text, View, Button, FlatList, StyleSheet} from 'react-native';

import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';


const CategoryMealsScreen = props => {
  const catid = props.navigation.getParam('CategoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const categoryMeals =  availableMeals.filter(meal => meal.categoryIds.indexOf(catid) >= 0);

  let content = <MealList listData={categoryMeals} navigation={props.navigation}/>

  if (categoryMeals.length === 0 || !categoryMeals) {
    content = <DefaultText>No meals found. Please check your filter!</DefaultText>
  }

  return (
    <View style={styles.screen}>
      {content}
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
