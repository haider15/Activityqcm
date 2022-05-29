import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language.model';
import { Input,Output } from '@angular/core';
import { QcmService } from 'src/app/qcm.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  panelOpenState = false; 
  
  @Input() carte: Language[] = [
  
  ];

  

@Input() name:string; 
@Input() description:String;
@Input() src:String;
@Input() passSccore:String;
@Input() version:String;
@Input() id:string;
  
 
  Questions:number[];

 
  qes:String;
  
  init=1;
 
  
  constructor(private language: QcmService) { }

  ngOnInit() {
    this.Questions=Array(1);
    this.getlanguage();
   
   
  }

  print(n:number){
    if(this.init<40){this.Questions=Array(Number(n+1))
    this.init=this.init+1;}
  }
  
  printi(n:number){
    this.Questions=Array(Number(n-1))
    this.init=this.init-1;
  }
  updatelanguage(): void {
    this.language.updatelanguage(this.id)
      .subscribe({
        next: (res) => {
          console.log(res); 
        },
        error: (e) => console.error(e)
      });
  }

  getlanguage(): void {
    this.language.getlanguage(this.id)
      .subscribe({
          next: (data) => {
            this.carte = data;
            console.log(data);
          },
          error: (e) => console.error(e)
      });
  }



  

}



