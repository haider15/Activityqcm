import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  panelOpenState = false;
  Questions:number[];
  reponse:number[];
 
  qes:String;
  res:String;
  init=1;
  resp=1;
  
  constructor() { }

  ngOnInit() {
    this.Questions=Array(1);
    this.reponse=Array(2);
  }

  print(n:number){
    this.Questions=Array(Number(n+1))
    this.init=this.init+1;
  }
  
  printi(n:number){
    this.Questions=Array(Number(n-1))
    this.init=this.init-1;
  }

  prints(n:number){
    this.reponse=Array(Number(n+1))
    this.resp=this.resp+1;
  }
  
  printis(n:number){
    this.reponse=Array(Number(n-1))
    this.resp=this.resp-1;
  }

}
