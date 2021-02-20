import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Platform } from 'react-native';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailsScreen from '../screen/MealDetailsScreen';
import Colors from '../constants/Colors';


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

export default createAppContainer(MealsStackNavigator);
