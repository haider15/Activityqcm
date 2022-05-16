import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-newlangage',
  templateUrl: './newlangage.component.html',
  styleUrls: ['./newlangage.component.scss']
})
export class NewlangageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date(){
    console.log(new Date());
  }

}
