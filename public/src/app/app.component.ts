import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    tasks: any = [];
    task: any;
    display = false;
    newTask: any;
    thisTask: any;

    

    constructor(private _httpService: HttpService){ 
      // this.display = false;
    }
     
    ngOnInit(){
      this.newTask = {title: "", description:""};
      this.thisTask = {id: "",title:"", description:""};
      
    }
    
    getTasksFromService(){
        let Observable = this._httpService.getTasks();
        Observable.subscribe(data => {
          console.log("Got my tasks!",data)
          this.tasks = data;
        })
    }


    onSubmit(){
      let Observable = this._httpService.addTask(this.newTask);
      Observable.subscribe(data => {
        this.newTask = {title: "", description: ""}
        this.getTasksFromService();
      })
    }

    deleteTask(id){
      let Observable = this._httpService.deleteTask(id);
      Observable.subscribe(data =>{
        this.getTasksFromService();
      });
    }
    
    editTask(task){
      this.thisTask = {
        _id: task._id,
        title: task.title,
        description: task.description,
      }
      this.display = true;
    }
    onEdit(thisTask,event){
      event.preventDefault();
      let Observable = this._httpService.updateTask(thisTask);
      Observable.subscribe(thisTask);
      this.getTasksFromService();
    }
}

