import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencesummary',
  templateUrl: './experiencesummary.component.html',
  styleUrls: ['./experiencesummary.component.css']
})
export class ExperiencesummaryComponent implements OnInit {

  private experienceSummary = [
    {
      company: 'Cognizant Technology Solutions'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
