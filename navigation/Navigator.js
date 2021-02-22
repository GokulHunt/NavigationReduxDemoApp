import React from 'react';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Platform } from 'react-native';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailsScreen from '../screen/MealDetailsScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import FiltersScreen from '../screen/FiltersScreen';
import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';

const StackNavigatorConfig = {
  defaultNavigationOptions : {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: Colors.whiteColor
    },
    headerTintColor:  Platform.OS === 'android' ? Colors.whiteColor : Colors.primaryColor
  }
};

const MealsStackNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
}, StackNavigatorConfig);

const FavoritesStackNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetails: MealDetailsScreen
}, StackNavigatorConfig);

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
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      }
    }
  },
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
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

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, StackNavigatorConfig);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions : {
      drawerLabel: 'Meals \'n\' Favs'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

export default createAppContainer(MainNavigator);
