import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "tasks-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.css"],
})



export class ListComponent implements OnInit {
  tasks: any;
  newTask: string;
  taskObj: any;
  
  constructor() {
    
  }

  ngOnInit(): void{
    this.newTask = "";
    this.tasks = [];

  }

  addTasks(event) {
    this.taskObj = {
      newTask: this.newTask,
      completed: false,
    };
      this.tasks.push(this.taskObj);
      this.newTask = "";

      localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }
  
  getTasks(): Observable<any> {
    if(localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return of(this.tasks)
  }

  deleteTask(index) {
    for (let i = 0; i < this.tasks.length; i++)
      if (this.tasks[i].completed) {
        this.tasks.splice(index, 1);
      }
  }

  deleteCurrentTask(index){
    this.tasks.splice(index, 1);
  }

  

}
