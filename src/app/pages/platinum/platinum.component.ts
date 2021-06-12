import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar/navbar.service';

@Component({
  selector: 'app-platinum',
  templateUrl: './platinum.component.html',
  styleUrls: ['./platinum.component.scss']
})
export class PlatinumComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
