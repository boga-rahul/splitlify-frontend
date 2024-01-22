import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allBills: [] = []

  jsonUrl = 'assets/bills.json'

 constructor(private httpClient: HttpClient) {
  this.getJSON()
  // .pipe(tap(console.log))
  // .subscribe(console.log)
  .subscribe(bills => this.allBills = bills['bills'])
 }

  public getJSON(): Observable<any> {
    return this.httpClient.get(this.jsonUrl);
  }



}
