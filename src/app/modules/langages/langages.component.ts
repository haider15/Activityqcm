import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.scss']
})
export class LangagesComponent implements OnInit {
  sideBarOpen = true;
  constructor() { 
    
  }

  ngOnInit() {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}

