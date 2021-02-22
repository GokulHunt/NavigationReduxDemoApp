import React from 'react';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { Platform } from 'react-native';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailsScreen from '../screen/MealDetailsScreen';
import FavoriesScreen from '../screen/FavoritesScreen';
import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';


const MealsStackNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
}, {
  defaultNavigationOptions : {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: Colors.whiteColor
    },
    headerTintColor:  Platform.OS === 'android' ? Colors.whiteColor : Colors.primaryColor
  }
});

const tabScreenConfig = {
  Meals: {
    screen: MealsStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
      }
    }
  },
  Favorites: {
    screen: FavoriesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      }
    }
  },
};

const MealsFavTabNavigation = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: Colors.whiteColor,
    shifting: false,
    barStyle: {
      backgroundColor: Colors.primaryColor,
    }
  }) :

  createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  });

export default createAppContainer(MealsFavTabNavigation);
