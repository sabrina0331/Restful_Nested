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
  // editTask(id){
  //   return this._http.get('/oneTask/' + id)
  // }
  updateTask(thistask){
    return this._http.put(`/updateOne/${thistask._id}`,thistask);
  }
  deleteTask(id){
    return this._http.delete('/deleteOne/'+ id);
  }
  // getOne(){
  //   let tempObservable = this._http.get('/oneTask/5c06aa1352a812ee0dc2fd5a');
  //   tempObservable.subscribe(data => console.log("Each task",data));
  // }
  // getPokemon(){
  //   let mew = this._http.get('https://pokeapi.co/api/v2/pokemon/mew/');
  //   mew.subscribe(data => console.log("My Favorite", data));
  // }

  // getFavorite(){
  //   let favoritePart = this._http.get('https://pokeapi.co/api/v2/pokemon/mew/');
  //   favoritePart.subscribe(data=> console.log("favoritePart is her", data['moves'][103]['move'].name));
  // }
  // postToServer(tasks){
  //   return this._http.post('/tasks',tasks);
  // }
 
}
