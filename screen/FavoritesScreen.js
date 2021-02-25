import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  let content = <MealList listData={favoriteMeals} navigation={props.navigation}/>

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    content = <DefaultText>No favorite meal is present. Start adding some!</DefaultText>
  }

  return (
    <View style={styles.screen}>
      {content}
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
