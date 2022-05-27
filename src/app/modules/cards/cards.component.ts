import { Component,OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { QcmService } from 'src/app/qcm.service';
import { Language } from 'src/app/models/language.model';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {



@Input() name:string; 
  @Input() description:String;
  @Input() src:String;
  @Input() passSccore:String;
  @Input() version:String;
isReadMore = true
  
  
  constructor(private language:QcmService) { 
    
  }

  ngOnInit(){
    
  }
  showText() {
    this.isReadMore = !this.isReadMore
 }
 delete(){
  console.log("delete");
}










}

