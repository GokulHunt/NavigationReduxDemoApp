import React from 'react';
import { FlatList, StyleSheet} from 'react-native';

import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const categoryMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
    return <MealItem title={itemData.item.title}
      onSelectMeal={() => {props.navigation.navigate({
        routeName: 'MealDetails',
        params: {
          'mealId': itemData.item.id,
          'mealTitle': itemData.item.title,
          'isFav': isFavorite
        }})}}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity.toUpperCase()}
      affordability={itemData.item.affordability.toUpperCase()}
      image={itemData.item.imageURL}/>;
  }

  return <FlatList contentContainerStyle={styles.mealItemFlatList}
      keyExtractor={(item, index) => item.id}
      data={props.listData}
      renderItem={categoryMealItem}/>;
}

const styles = StyleSheet.create({
  mealItemFlatList: {
    width: '100%',
    alignItems: 'center'
  }
})

export default MealList;
