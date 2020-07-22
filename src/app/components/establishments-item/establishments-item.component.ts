import { Component, Input, OnInit } from '@angular/core';

import { GeolocationService } from '../../services/geolocation.service';
import { Establishment } from '../../models/establishment';

@Component({
  selector: 'app-establishments-item',
  templateUrl: './establishments-item.component.html',
  styleUrls: ['./establishments-item.component.scss'],
})
export class EstablishmentsItemComponent implements OnInit {
  @Input()
  establishment: Establishment;

  city: String;
  loading: Boolean = true;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.getCity();
  }

  getCity() {
    const { latitude, longitude } = this.establishment;
    this.geolocationService.getCity(latitude, longitude).subscribe((data) => {
      if (data.city) {
        this.city = data.city;
      }
      this.loading = false;
    });
  }
}
