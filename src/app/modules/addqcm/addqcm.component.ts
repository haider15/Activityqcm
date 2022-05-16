import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  cin: number;
  moy: number;
  pass: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {cin: 1, name: 'Hydrogen', moy: 1.0079, pass: 'passed'},
  {cin: 2, name: 'Helium', moy: 4.0026, pass: 'refused'},
  {cin: 3, name: 'Lithium', moy: 6.941, pass: 'passed'},
  {cin: 4, name: 'Beryllium', moy: 9.0122, pass: 'passed'},
  {cin: 5, name: 'Boron', moy: 10.811, pass: 'passed'},
  {cin: 6, name: 'Carbon', moy: 12.0107, pass: 'passed'},
  {cin: 7, name: 'Nitrogen', moy: 14.0067, pass: 'passed'},
  {cin: 8, name: 'Oxygen', moy: 15.9994, pass: 'passed'},
  {cin: 9, name: 'Fluorine', moy: 18.9984, pass: 'passed'},
  {cin: 10, name: 'Neon', moy: 20.1797, pass: 'passed'},
  {cin: 11, name: 'Sodium', moy: 22.9897, pass: 'passed'},
  {cin: 12, name: 'Magnesium', moy: 24.305, pass: 'refused'},
  {cin: 13, name: 'Aluminum', moy: 26.9815, pass: 'refused'},
  {cin: 14, name: 'Silicon', moy: 28.0855, pass: 'Si'},
  {cin: 15, name: 'Phosphorus', moy: 30.9738, pass: 'P'},
  {cin: 16, name: 'Sulfur', moy: 32.065, pass: 'S'},
  {cin: 17, name: 'Chlorine', moy: 35.453, pass: 'Cl'},
  {cin: 18, name: 'Argon', moy: 39.948, pass: 'Ar'},
  {cin: 19, name: 'Potassium', moy: 39.0983, pass: 'K'},
  {cin: 20, name: 'Calcium', moy: 40.078, pass: 'Ca'},
];

@Component({
  selector: 'app-addqcm',
  templateUrl: './addqcm.component.html',
  styleUrls: ['./addqcm.component.scss']
})
export class AddqcmComponent implements AfterViewInit {
  displayedColumns: string[] = ['cin', 'name', 'moy', 'pass'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit() {
  }
}
  


