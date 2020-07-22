import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../services/establishment.service';
import { Establishment } from '../../models/establishment';

@Component({
  selector: 'app-establishments-list',
  templateUrl: './establishments-list.component.html',
  styleUrls: ['./establishments-list.component.scss'],
})
export class EstablishmentsListComponent implements OnInit {
  establishments: Establishment[];

  constructor(private establishmentService: EstablishmentService) {}

  ngOnInit(): void {
    this.getEstablishments();
  }

  getEstablishments() {
    this.establishmentService
      .getEstablishments()
      .subscribe((establishments: Establishment[]) => {
        this.establishments = establishments;
        console.log(establishments);
      });
  }
}
