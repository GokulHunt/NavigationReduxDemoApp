import React from 'react';
import { Text, View, Button, FlatList, StyleSheet} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const categoryMealsScreen = props => {
  const catid = props.navigation.getParam('CategoryId');
  const categoryMeals =  MEALS.filter(meal => meal.categoryIds.indexOf(catid) >= 0);

  const categoryMealItem = itemData => {
    return <MealItem title={itemData.item.title} onSelectMeal={() => {props.navigation.navigate({routeName: 'MealDetails', params: { 'mealId': itemData.item.id }})}}
          duration={itemData.item.duration} complexity={itemData.item.complexity.toUpperCase()} affordability={itemData.item.affordability.toUpperCase()} image={itemData.item.imageURL}/>;
  }

  return (
    <View style={styles.screen}>
      <FlatList contentContainerStyle={styles.mealItemFlatList} keyExtractor={(item, index) => item.id} data={categoryMeals} renderItem={categoryMealItem}/>
    </View>
  );
}

categoryMealsScreen.navigationOptions = navdata => {
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
  },
  mealItemFlatList: {
    width: '100%',
    alignItems: 'center'
  }
});

export default categoryMealsScreen;
