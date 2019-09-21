import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

 username:string;
  

  constructor(private http:HttpClient) { }
  public getUser(n){
    console.log(n);
    
    return this.http.get("https://api.github.com/users/"+n);
  }

  GetRepos(ns) {
    console.log(ns);
    return this.http.get('http://api.github.com/users/'+ns+'/repos');
   
  }
}
