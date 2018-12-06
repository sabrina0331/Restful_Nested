import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    tasks: any;

    constructor(private _httpService: HttpService){}
      
    ngOnInit(){
      this.getTasksFromService();
    }
    
    getTasksFromService(){
        let Observable = this._httpService.getTasks();
        Observable.subscribe(data => {
          console.log("Got my tasks!",data)
          this.tasks = data;
        })
    }
}
