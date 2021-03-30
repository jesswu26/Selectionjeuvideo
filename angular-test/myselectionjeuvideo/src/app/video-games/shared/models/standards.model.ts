import { Budget } from "./budget/budget.model";
import { Categories } from "./categories/categories.model";
import { Mood } from "./mood/mood.model";   


export class Standards {

 public categories: Categories = new Categories();
 public budget: Budget = new Budget();
 public mood: Mood = new Mood();

}
