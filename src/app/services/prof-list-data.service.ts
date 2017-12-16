import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // NOTE ilker importing Http
import 'rxjs/add/operator/map'; // NOTE ilker importing react JS extension operator map

// NOTE ilker below block is not needed for final project
// import { Observable } from 'rxjs/Observable';
// // import { of } from 'rxjs/observable/of';
// // import 'rxjs/observable/of';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/from';

@Injectable()
export class ProfListDataService {
prof2s: Prof2[];

  constructor(public http:Http) { 
    console.log("ProfListDataService constructor executing");
    this.prof2s = [
      {name:'ilker', lastname:'kiris'},
      {name:'neelu', lastname:'sinha'}
    ];
  }

  getProfs() {
    // NOTE ilker below returns an "observable" from rxjs (react JS extension)
    return this.http.get('http://localhost:8016/profs')
      .map( response => response.json()); // NOTE rxjs map operator allows us to hook up a transformer to observable returned by above GET
  }

  // NOTE ilker providing to show service returning an Array. Not needed for final project
  getProf2s() {
    // NOTE ilker below returns an Prof2[]
    return this.prof2s;
  }

  // NOTE ilker below block is not needed for final project
  // getProf2sC() {
  //   // NOTE ilker below returns an "observable" from rxjs (react JS extension)
  //   return Observable.of(this.prof2s);
  // }
  // getProf2sA() {
  //   // NOTE ilker below returns an "observable" from rxjs (react JS extension)
  //   return Observable.from(this.prof2s);
  // }

}

//NOTE ilker using 'export' below allows any component using this service to be able to import the below interface
export interface Prof {
  name:string,
  lastname:string
}

// NOTE ilker no need for below one, just to show service returning an Array. No need in final project
export interface Prof2 {
  name:string,
  lastname:string
}
