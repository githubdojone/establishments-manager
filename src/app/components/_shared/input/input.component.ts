import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() params;
  @Input() inputModel: string = '';

  @Output() inputModelChange: EventEmitter<string> = new EventEmitter<string>();
}
