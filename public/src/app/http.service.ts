import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getPokemon();
    // this.getFavorite();
    this.updateTask(this.updateTask);
    
}

 
  getTasks(){
    return this._http.get('/tasks');
  }
  addTask(newtask){
    return this._http.post('/task',newtask)
  }
  
  updateTask(thistask){
    return this._http.put(`/updateOne/${thistask._id}`,thistask);
  }
  deleteTask(id){
    return this._http.delete('/deleteOne/'+ id);
  }
  showOne(task){
    return this._http.get(`/oneTask/${task._id}`,task);
  }
  // getPokemon(){
  //   let mew = this._http.get('https://pokeapi.co/api/v2/pokemon/mew/');
  //   mew.subscribe(data => console.log("My Favorite", data));
  // }

  // getFavorite(){
  //   let favoritePart = this._http.get('https://pokeapi.co/api/v2/pokemon/mew/');
  //   favoritePart.subscribe(data=> console.log("favoritePart is her", data['moves'][103]['move'].name));
  // }

 
}
