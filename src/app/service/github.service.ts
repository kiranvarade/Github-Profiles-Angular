import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

 username:string;
  

  constructor(private http:HttpClient) { }
  public getUser(user){
    console.log(user);
    
    return this.http.get("https://api.github.com/users/"+user);
  }

  GetRepos(resp) {
    console.log(resp);
    return this.http.get('http://api.github.com/users/'+resp+'/repos');
   
  }
}
