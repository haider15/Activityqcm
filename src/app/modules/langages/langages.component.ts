import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { QcmService } from 'src/app/qcm.service';
import { Language } from 'src/app/models/language.model';








@Component({
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.scss']
})

export class LangagesComponent implements OnInit {
 
  sideBarOpen = true;

   carte: Language[] = [
     
  ];

 

  constructor(private quizService: QcmService) { 
    
  }

  ngOnInit() { this.getlanguage();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getlanguage(): void {
    this.quizService.getall()
      .subscribe({
        next: (data) => {
          this.carte = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}

