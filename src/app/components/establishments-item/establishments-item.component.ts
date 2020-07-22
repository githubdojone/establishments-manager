import { Component, Input, OnInit } from '@angular/core';

import { Establishment } from '../../models/establishment';

@Component({
  selector: 'app-establishments-item',
  templateUrl: './establishments-item.component.html',
  styleUrls: ['./establishments-item.component.scss'],
})
export class EstablishmentsItemComponent implements OnInit {
  @Input()
  establishment: Establishment;

  constructor() {}

  ngOnInit(): void {}
}
