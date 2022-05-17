import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.scss']
})
export class LangagesComponent implements OnInit {
  l=[1,1,1];
  c=[1,1,1];
  sideBarOpen = true;
  constructor() { 
    
  }

  ngOnInit() {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}

