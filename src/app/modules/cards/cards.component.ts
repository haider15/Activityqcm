import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
text= "This is long text replaced with reading more/less link example in Angular application paragraph text shown here continue THis is long text replaced with read more/less link example in Angular application paragraph text shown here continue continueThis is long text replaced with reading more/less link example in Angular application paragraph text shown here continue THis is long text replaced with read more/less link example in Angular application paragraph text shown here continuecontinue THis is long text replaced with reading more/less link example in Angular application paragraph text shown here continue THis is long text replaced with read more/less link example in Angular application paragraph text shown herecontinue continu"

  isReadMore = true
  
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  showText() {
    this.isReadMore = !this.isReadMore
 }
 delete(){
  console.log("delete");
}
}
