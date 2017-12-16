import { Component, OnInit } from '@angular/core';

import { ProfListDataService } from '../../services/prof-list-data.service';
import { Prof }  from '../../services/prof-list-data.service';  // NOTE ilker importing the interface from the service
import { Prof2 } from '../../services/prof-list-data.service';  // NOTE ilker importing the interface from the service. No need in final project

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent implements OnInit {
  profs: Prof[];
  prof2s: Prof2[];

  constructor(private profListDataService:ProfListDataService) { }

  ngOnInit() {
    this.profListDataService.getProfs().subscribe( (profs) => {
      console.log(profs);
      this.profs = profs;
    });
    // NOTE ilker once above service works, below should not execute.
    if (!(this.profs && this.profs.length > 0)) {
      this.profs = [
        {name:'ilker_hardCodedIn_profListComponent', lastname:'kiris'},
        {name:'neelu_hardCodedIn_profListComponent', lastname:'sinha'}
      ];
    }
    // NOTE ilker below is an example of a service retuning an Array, not an observable. No need to use in final project
    this.prof2s = this.profListDataService.getProf2s();
  }

}
