import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  label = "Register"

  functionCall() {
    console.log("Clicked");
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
