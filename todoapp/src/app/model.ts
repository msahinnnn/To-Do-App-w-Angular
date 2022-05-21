import { TodoItem } from "./todoitem";

export class Model{
    name: string;
    items: TodoItem[];

    constructor(){
        this.name = "Anonymous";
        this.items = [
            {description: "Breakfast", priority: "5", action: true},
            {description: "Workout", priority: "4", action: true},
            {description: "Shopping", priority: "3", action: false}
        ];
    }
}