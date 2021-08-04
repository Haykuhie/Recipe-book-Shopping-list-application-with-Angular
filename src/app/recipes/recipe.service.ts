import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import {Recipe} from './recipe.model'


@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

   private recipes: Recipe[]=[
        new Recipe('A test recipe', 
                   'This is simply a test', 
                   'https://healthyfitnessmeals.com/wp-content/uploads/2020/06/cucumber-tomato-salad-9.jpg', 
                   [
                     new Ingredient('Meat', 1),
                     new Ingredient('French Fries', 20)
                   ]),
        new Recipe('Another test recipe', 
                   'This is simply a test', 
                   'https://healthyfitnessmeals.com/wp-content/uploads/2020/06/cucumber-tomato-salad-9.jpg',
                    [
                      new Ingredient('Meat', 1),
                     new Ingredient('Buns', 2)
                    ])
      ]

      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice()
      }

      getRecipe(index:number){
       return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
         this.slService.addIngredients(ingredients)
      }

}