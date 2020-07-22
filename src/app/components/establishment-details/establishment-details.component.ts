import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Establishment } from 'src/app/models/establishment';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.scss'],
})
export class EstablishmentDetailsComponent implements OnInit {
  establishment: Establishment;

  establishmentList: Establishment[];

  indexOfEstablishment: Number;

  city = {
    id: 'city',
    label: 'Cidade',
    options: ['Curitiba', 'São Paulo'],
  };

  name = {
    id: 'name',
    label: 'Nome',
  };

  address = {
    id: 'address',
    label: 'Endereço',
  };

  bank = {
    id: 'bank',
    label: 'Banco',
    options: ['Banco do Brasil', 'Bradesco'],
  };

  type = {
    id: 'type',
    label: 'Tipo de conta',
    options: ['Conta corrente', 'Conta poupança'],
  };

  document = {
    id: 'document',
    label: 'CPF / CNPJ',
  };

  agency = {
    id: 'agency',
    label: 'Agência',
    maxLength: 4,
  };

  agencyDigit = {
    id: 'agencyDigit',
    label: '',
    maxLength: 1,
  };

  account = {
    id: 'account',
    label: 'Conta',
    maxLength: 4,
  };

  accountDigit = {
    id: 'accountDigit',
    label: '',
    maxLength: 1,
  };

  autoPlunder = {
    id: 'autoPlunder',
    label: 'Saque automático?',
    options: ['Sim', 'Não'],
  };

  inputs = {
    city: 'Curitiba',
    name: '',
    address: '',
    financial: {
      bank: '',
      type: '',
      document: '',
      agency: '',
      agencyDigit: '',
      account: '',
      accountDigit: '',
      autoPlunder: '',
    },
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const establishments = localStorage.getItem('establishments');
      this.establishmentList = JSON.parse(establishments);

      this.establishment = this.establishmentList.find(
        (item: Establishment) => {
          this.indexOfEstablishment = item.index;
          return item.id === params.id;
        }
      );

      let { city, name, address, financial } = this.establishment;

      if (!city) {
        city = '';
      }

      if (!financial) {
        financial = this.inputs.financial;
      }

      const populateInput = { financial, city, name, address };

      this.inputs = populateInput;
    });
  }

  handleSubmit(event) {
    const { city, name, address, financial } = this.inputs;
    this.establishment = {
      ...this.establishment,
      city,
      name,
      address,
      financial,
    };

    let filteredArr = this.establishmentList.filter(
      (item) => item.index !== this.indexOfEstablishment
    );
    localStorage.setItem(
      'establishments',
      JSON.stringify([this.establishment, ...filteredArr])
    );

    this.router.navigateByUrl('/list');
  }
}
