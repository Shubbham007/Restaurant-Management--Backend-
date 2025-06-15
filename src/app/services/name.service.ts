import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  username:string
  names:string[]
  filteredName:string[]
  
  constructor() { 
    this.username=''
    this.names=['Harshada','namjoon','suga','suja','gayatri','sneha','vidya','nanu','shubham','pooja']
    this.filteredName=[]
  }
  searchNames()
  {
    this.filteredName=[]
    this.names.forEach(name=>{
      if(name ===this.username)
        this.filteredName.push(name)
    });
    this.username=''
  }
}
