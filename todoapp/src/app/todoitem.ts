
// export class TodoItem{
//     description: string;
//     priority: number;
//     action: string;

//     constructor(description: string, priority: number, action: string){
//         this.description = description;
//         this.priority = priority;
//         this.action = action;
//     }
// }


// export class TodoItem{
//     constructor(public description: string, public priority: number, public action: string){
//         this.description = description;
//         this.priority = priority;
//         this.action = action;
//     }
// }

export interface TodoItem{
    description: string;
    priority: string;
    action: boolean;
}