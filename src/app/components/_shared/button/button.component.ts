import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(event) {
    this.onClick.emit(event);
  }
}
