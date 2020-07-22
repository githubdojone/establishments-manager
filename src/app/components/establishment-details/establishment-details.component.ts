import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Establishment } from 'src/app/models/establishment';
import { Dropdown } from 'src/app/models/dropdown';

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
    city: '',
    name: '',
    address: '',
    bank: '',
    type: '',
    document: '',
    agency: '',
    agencyDigit: '',
    account: '',
    accountDigit: '',
    autoPlunder: '',
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const establishments = localStorage.getItem('establishments');
      this.establishmentList = JSON.parse(establishments);

      this.establishment = this.establishmentList.find(
        (item: Establishment) => {
          this.indexOfEstablishment = params.index;
          return item.id === params.id;
        }
      );

      const { city, name, address, financial } = this.establishment;
      console.log(this.establishment);

      const populateInput = { ...financial, city, name, address };

      // this.inputs = populateInput;
    });
  }

  handleSubmit(event) {
    const { city, name, address, ...financial } = this.inputs;
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
  }
}
