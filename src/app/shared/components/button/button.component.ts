import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() 
  label: string = "";
  @Output() 
  onClick = new EventEmitter<any>();

  constructor() {}

  onClickButton(event: any) {
      this.onClick.emit(event);
  }
}