import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'restro-app';
  count :number
  flag:boolean
  names:string[]
  newName:string

  user:User
  incrementCount()
  {
    this.count++
  }
  decrementCount()
  {
    if(this.count>0)
      this.count--;
  }
  ShowPara()
  {
    this.flag=true
  }
  HidePara()
  {
    this.flag=false
  }
  deleteName(i: number)
  {
    //console.log(i)
    this.names.splice(i,1)
  }
  addName()
  {
    //console.log(this.newName)
    //this.names.push(this.newName.trim())
    this.names.push(this.newName)
    this.newName=''
  }
  signUpSubmit(signUpForm :any)
  {
    //get data from form 
    //make http request to the rest api

  }
  
  constructor()
  {
    this.count=0
    this.flag=true
    this.names=['Harshada','Danashree','sonu','Harsha','Harshu']
    this.newName=''
    this.user=new User()
    
  }
}
