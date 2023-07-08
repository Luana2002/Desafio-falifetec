import { Component, OnInit } from '@angular/core';
import { Letra, Turma } from '../interface/turma.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit {
  readonly apiURL!: string;

  letra: Array<Letra> = [];
  turma: Array<Turma> = [];

  constructor(private http: HttpClient) {
    this.apiURL = `http://localhost:3000`
  }

  ngOnInit() {
    this.http.get<Turma[]>(`${this.apiURL}/turmas`)
      .subscribe(response => {
        console.log(response);
        this.turma = response
      });

    this.http.get<Letra[]>(`${this.apiURL}/letraTurma`)
      .subscribe(responseletra => {
        console.log(responseletra);
        this.letra = responseletra
      });
  }

}
