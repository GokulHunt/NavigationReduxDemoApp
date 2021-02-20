import React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const categoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Button title="Go To Meal Details Screen" onPress={() => (props.navigation.navigate({routeName : 'MealDetails'}))}/>
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
  }
});

export default categoryMealsScreen;
