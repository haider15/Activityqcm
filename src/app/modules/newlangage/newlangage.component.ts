import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language.model';
import { QcmService } from 'src/app/qcm.service';


@Component({
  selector: 'app-newlangage',
  templateUrl: './newlangage.component.html',
  styleUrls: ['./newlangage.component.scss']
})
export class NewlangageComponent implements OnInit {
  
  
  language: Language = {
    _id:'',
    name: '',
    description: '',
    src:'',
    passSccore:'',
    version:''
  };
  submitted = false;



  
  constructor(private tutorialService: QcmService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      name: this.language.name,
      description: this.language.description,
      src:this.language.src,
      passSccore:this.language.passSccore,
      version:this.language.version
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.language = {
      _id:'',
      name: '',
      description: '',
      src:'',
      passSccore:'',
      version:''
    };
  }


  
}
