import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  @Input() json: object;

  constructor() { }

  ngOnInit() {
  }

}
