import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() params;
  @Input() inputModel: string = '';

  @Output() inputModelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
