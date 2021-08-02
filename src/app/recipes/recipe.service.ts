import {Recipe} from './recipe.model'

export class RecipeService {
   private recipes: Recipe[]=[
        new Recipe('A test recipe', 'This is simply a test', 'https://healthyfitnessmeals.com/wp-content/uploads/2020/06/cucumber-tomato-salad-9.jpg'),
        new Recipe('Another test recipe', 'This is simply a test', 'https://healthyfitnessmeals.com/wp-content/uploads/2020/06/cucumber-tomato-salad-9.jpg')
      ]
      getRecipes(){
          return this.recipes.slice()
      }
}