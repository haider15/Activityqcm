import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {
  reponse:number[];
  res:String;
  resp=2;
  constructor() { }

  ngOnInit() {
    this.reponse=Array(2);
  }
  prints(n:number){
    this.reponse=Array(Number(n+1))
    this.resp=this.resp;
  }
  
  printis(n:number){
    this.reponse=Array(Number(n-1))
    this.resp=this.resp-1;
  }
}
