import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputType';
  config = {
    displayKey:"description", 
    search:true, 
    height: 'auto', 
    placeholder:'Select', 
    moreText: 'more', 
    noResultsFound: 'no record found', 
    searchPlaceholder:'Search', 
    searchOnKey: 'name', 
    }
    dataModel:any
    stringOptions = [
      'Burns Dalton',
      'Mcintyre Lawson',
      'Amie Franklin',
      'Jocelyn Horton',
      'Fischer Erickson',
      'Medina Underwood',
      'Goldie Barber',
    ];
    reset() {
      this.dataModel ='' ;
    }
}
