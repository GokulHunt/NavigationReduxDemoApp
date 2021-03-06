import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryScreenTile from '../components/CategoryScreenTile';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {

  const renderGridEntry = itemData => {
    return <CategoryScreenTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
      props.navigation.navigate({
        routeName: 'CategoryMeals',
        params: {
          'CategoryId': itemData.item.id
        }
      })}}/>;
  }

  return (
    <View style={styles.screen}>
      <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridEntry}/>
    </View>
  );
}

CategoriesScreen.navigationOptions = navdata => {
  return {
    headerTitle: 'Meal Categories',
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

export default CategoriesScreen;
