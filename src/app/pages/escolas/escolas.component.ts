import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Escola } from '../interface/escolas.interface';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss'],
})

export class EscolasComponent implements OnInit {
  readonly apiURL!: string;
  lista: Array<Escola> = [];

  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:3000/escolas';
  }
  ngOnInit() {
    this.http.get<Escola[]>(`${this.apiURL}`)
      .subscribe(resultado => {
        console.log(resultado);
        this.lista = resultado;
      });
  }
}
