import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})

export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Sergiu", "Babin", "sergiubabin17@gmail.com", 50000),
    new SalesPerson("Gheorghe", "Condorachi", "gheorghecondorachi@gmail.com", 40000),
    new SalesPerson("Ghena", "Caraman", "GhennaC@gmail.com", 90000),
    new SalesPerson("Cristi", "Babin", "Crissbabin18@gmail.com", 60000),
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
