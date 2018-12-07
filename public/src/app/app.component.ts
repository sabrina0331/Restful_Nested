import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    tasks: any;
    task: any;
    display: any;
    

    constructor(private _httpService: HttpService){ 
      this.display = false;
    }
     
    ngOnInit(){
      this.getTasksFromService();
      // this.onButtonClickEvent();
    }
    
    getTasksFromService(){
        let Observable = this._httpService.getTasks();
        Observable.subscribe(data => {
          console.log("Got my tasks!",data)
          this.tasks = data;
        })
    }
    info(task){
      this.task = task;
      this.display = true;
    }
  
    // onButtonClickEvent(tasks: any): void{
    //   console.log(`click event is working with num param: ${tasks.title}`);
    // }
}
