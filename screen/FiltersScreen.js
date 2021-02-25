import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Switch, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {useDispatch} from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import CustomSwitch from '../components/CustomSwitch';
import { setFilters } from '../store/actions/meals';

const FiltersScreen = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const [glutenFree, setGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const filters = {
      glutenFree: glutenFree,
      vegan: vegan,
      vegetarian: vegetarian,
      lactoseFree: lactoseFree
    }

    dispatch(setFilters(filters));
  }, [glutenFree, vegan, vegetarian, lactoseFree, dispatch]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <CustomSwitch value={glutenFree} onChange={newvalue => setGlutenFree(newvalue)}>Is Gluten Free</CustomSwitch>
      <CustomSwitch value={vegan} onChange={newvalue => setVegan(newvalue)}>Is Vegan</CustomSwitch>
      <CustomSwitch value={vegetarian} onChange={newvalue => setVegetarian(newvalue)}>Is Vegetarian</CustomSwitch>
      <CustomSwitch value={lactoseFree} onChange={newvalue => setLactoseFree(newvalue)}>Is Lactose Free</CustomSwitch>
    </View>
  );
}

FiltersScreen.navigationOptions = navdata => {
  return {
    headerTitle: 'Filters',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Menu' iconName='ios-menu' onPress={() => navdata.navigation.toggleDrawer()}/>
        </HeaderButtons>,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Save' iconName='ios-save' onPress={() => {
            navdata.navigation.getParam('save')()
          }}/>
        </HeaderButtons>

  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  title: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    marginBottom: 20
  }
});

export default FiltersScreen;
