import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  model = new Model();

  displayAll: boolean = false;
  
  addItem(value: string){
    if(value != ""){
      this.model.items.push(
        {description: value, priority: "4", action: false}
      );
    }else{
      alert("Please enter a work to do");
    }
    
  }
  
  getName(){
    return this.model.name;
  }

  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item=> item.action == false);
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

}
