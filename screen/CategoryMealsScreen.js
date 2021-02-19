import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const categorieMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default categorieMealsScreen;
