import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Establishment } from 'src/app/models/establishment';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.scss'],
})
export class EstablishmentDetailsComponent implements OnInit {
  establishment: Establishment;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const establishments = localStorage.getItem('establishments');
      const list = JSON.parse(establishments);

      this.establishment = list.find(
        (item: Establishment) => item.id === params.id
      );
    });
  }
}
