import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


declare global {
  interface JQuery {
    footable(): JQuery;
  }
}

@Component({
  selector: 'app-jsquery-test',
  templateUrl: './jsquery-test.component.html',
  styles: []
})
export class JsqueryTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    // (<any>('.table')).footable();
    // $("button").click(
    //   function() {
    //     $(".test").hide();
    //     alert("hello werld");
    //   }
    // );
  }

}
