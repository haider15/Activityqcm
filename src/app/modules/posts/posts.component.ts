import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  panelOpenState = false;
  Questions:number[];
 
  qes:String;
  init=1;
  value:number[];
  constructor() { }

  ngOnInit() {
    this.Questions=Array(5);
  }

  print(n:number){
    this.Questions=Array(Number(n+1))
    this.init=this.init+1;
  }
  
  printi(n:number){
    this.Questions=Array(Number(n-1))
    this.init=this.init-1;
  }
}
