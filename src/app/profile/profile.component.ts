import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ser:GithubService) { 
    this.userInfo = false;
  }
  public userInfo: any;
  public repos: any;
  username: string;
 // private name="kiranvarade";
  ngOnInit() {
  }
  searchUser() {
    this.ser.getUser(this.username).subscribe(res =>{ 
                                                      this.userInfo = res 
                                                    });
    this.ser.GetRepos(this.username).subscribe((res) => {
                                                 this.repos = res },
                                                (er:HttpErrorResponse)=>{
                                                  if(er.error instanceof Error){
                                                    alert("client side error");
                                                  }else{
                                                    alert("server side error");
                                                  }
                                              });
  }
}
