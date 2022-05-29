import { Component,OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { QcmService } from 'src/app/qcm.service';
import { Language } from 'src/app/models/language.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


@Input() carte: Language[] = [
  
     ];
   
  
  @Input() name:string; 
  @Input() description:String;
  @Input() src:String;
  @Input() passSccore:String;
  @Input() version:String;
  @Input() id:string;
isReadMore = true
  
  
  constructor(private language:QcmService,  private router: Router,private route: ActivatedRoute) { 
    
  }

  ngOnInit(){
     }

 

  showText() {
    this.isReadMore = !this.isReadMore
 }





  deletelanguage(): void {
    this.language.deletelanguage(this.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          
          this.router.navigate(['/language']);
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

