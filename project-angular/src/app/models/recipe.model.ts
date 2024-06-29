export class Recipe{
recipeCode!: number
recipeName!: string
categoryCode!: number
preparation!: number //זמן הכנה
difficulty!: number
dateAdded!: Date
ingredients!: string[] //רשימת רכיבם
instructions!: string[] //אופו ההכנה
userCode!: number
image!: string
}