import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = props => {
  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  console.log(favoriteMeals);

  return (
    <View style={styles.screen}>
      <MealList listData={favoriteMeals} navigation={props.navigation}/>
    </View>
  );
}

FavoritesScreen.navigationOptions = {
  headerTitle: 'Favorites'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen;
