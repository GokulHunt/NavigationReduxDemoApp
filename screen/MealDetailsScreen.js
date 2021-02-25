import React, { useEffect, useCallback } from 'react';
import { Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

import { toggleFavorite } from '../store/actions/meals';

const BodyTextItem = props => {
  return (
    <View style={styles.bodyTextContainer}>
      <Text style={styles.bodyText}>{props.children}</Text>
    </View>
  );
}

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.meals);

  const mealData = availableMeals.filter(meal => meal.id === mealId)[0];

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [mealId, dispatch]);

  useEffect(() => {
    // props.navigation.setParams({
    //   mealTitle: mealData.title
    // });
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    })
  }, [toggleFavoriteHandler])


  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image  style={styles.image} source={{ uri: mealData.imageURL }}/>
        <View style={styles.details} >
          <DefaultText style={styles.detailText}>{mealData.duration}m</DefaultText>
          <DefaultText style={styles.detailText}>{mealData.complexity.toUpperCase()}</DefaultText>
          <DefaultText style={styles.detailText}>{mealData.affordability.toUpperCase()}</DefaultText>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
          {mealData.ingredients.map(ingredient => {
            return <BodyTextItem>{ingredient}</BodyTextItem>;
          })}
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.subtitle}>Steps</Text>
          {mealData.steps.map(step => {
            return <BodyTextItem>{step}</BodyTextItem>;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailText: {
    paddingHorizontal: 40
  },
  bodyContainer: {
    width: '100%',
    marginVertical: 20
  },
  subtitle: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    textAlign: 'center'
  },
  bodyTextContainer: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginRight: 20,
    borderColor: Colors.grayColor,
    borderWidth: 1
  },
  bodyText: {
    fontFamily: 'open-sans',
    fontSize: 16,
    textAlign: 'left'
  }
});

MealDetailsScreen.navigationOptions = navdata => {
  const mealId = navdata.navigation.getParam('mealId');
  const mealTitle = navdata.navigation.getParam('mealTitle');
  const toggleFav = navdata.navigation.getParam('toggleFav');

  return {
    headerTitle: mealTitle,
    headerRight:  <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favorite' iconName='ios-star' onPress={toggleFav}/>
    </HeaderButtons>
  }
}

export default MealDetailsScreen;
