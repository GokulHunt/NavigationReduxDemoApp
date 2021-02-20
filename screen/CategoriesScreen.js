import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const categoriesScreen = props => {

  const renderGridEntry = itemData => {
    return(
      <TouchableOpacity style={styles.gridItem} onPress={() => props.navigation.navigate({
        routeName: 'CategoryMeals',
        params: {
          'CategoryId': itemData.item.id
        }
      })}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  console.log(CATEGORIES);
  return (
    <View style={styles.screen}>
      <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridEntry}/>
    </View>
  );
}

categoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    width: '50%',
    margin: 15,
    height: 150
  }
})

export default categoriesScreen;
