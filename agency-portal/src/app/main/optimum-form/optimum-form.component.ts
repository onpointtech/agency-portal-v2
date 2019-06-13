import { Component, OnInit } from '@angular/core';
import { OptimumComponentsModule } from 'optimum-components';


@Component({
  selector: 'app-optimum-form',
  templateUrl: './optimum-form.component.html',
  styleUrls: ['./optimum-form.component.css']
})
export class OptimumFormComponent implements OnInit {


  textInputLabel="[From Parent] text input";
  textAreaInputLabel="[From Parent] text area";
  phoneInputLabel="[From Parent] phone";
  radioInputLabel="[From Parent] radio";
  dropdownInputLabel="[From Parent] dropdown";

  radioChoices=['from parent: yes', 'from parent: no', 'from parent: unsure',]
  dropdownChoices = ['from parent: male', 'from parent:female', 'from parent: pride'];


  constructor() { }

  ngOnInit() {
  }

}
