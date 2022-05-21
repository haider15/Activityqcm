import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  panelOpenState = false; 
  
  
 
  Questions:number[];

 
  qes:String;
  
  init=1;
 
  
  constructor() { }

  ngOnInit() {
    this.Questions=Array(1);
   
  }

  print(n:number){
    if(this.init<40){this.Questions=Array(Number(n+1))
    this.init=this.init+1;}
  }
  
  printi(n:number){
    this.Questions=Array(Number(n-1))
    this.init=this.init-1;
  }

}
