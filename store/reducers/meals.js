import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const index = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (index >= 0) {
        const favorites = [ ...state.favoriteMeals ];
        favorites.splice(index, 1);
        return { ...state, favoriteMeals: favorites };
      }
      else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        const favorites = [ ...state.favoriteMeals ];

        return { ...state, favoriteMeals: favorites.concat(meal)};
      }

    case SET_FILTERS:
      console.log(action.filters);
      const filteredMeals = state.meals.filter(meal => {
        if (action.filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (action.filters.vegan && !meal.isVegan) {
          return false;
        }
        if (action.filters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (action.filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals};

    default:
      return state;
  }
  return state;
}

export default mealsReducer;
