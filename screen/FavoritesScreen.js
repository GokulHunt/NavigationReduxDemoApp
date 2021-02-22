import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  console.log(favoriteMeals);

  return (
    <View style={styles.screen}>
      <MealList listData={favoriteMeals} navigation={props.navigation}/>
    </View>
  );
}

FavoritesScreen.navigationOptions = navdata => {
  return {
    headerTitle: 'Favorites',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Menu' iconName='ios-menu' onPress={() => navdata.navigation.toggleDrawer()}/>
        </HeaderButtons>

  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen;
