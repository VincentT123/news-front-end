import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actus } from 'src/app/interfaces/actus';
import { ActusService } from 'src/app/services/actus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cat: any;
  categ: any;
  actus: Actus = {};
  listeActus: Array <Actus> = new Array <Actus>();
  pol: Actus = {};
  listePol: Array <Actus> = new Array <Actus>();
  int: Actus = {};
  listeInt: Array <Actus> = new Array <Actus>();
  soc: Actus = {};
  listeSoc: Array <Actus> = new Array <Actus>();
  cul: Actus = {};
  listeCul: Array <Actus> = new Array <Actus>();

  constructor(private actusService: ActusService ,private route : ActivatedRoute) { }

  ngOnInit(): void {

    
    this.loadPol();
    this.loadInt();
    this.loadSoc();
    this.loadCul();
    
  }

  loadPol() {
    this.actusService.getCat("pol").subscribe(res => {
      this.listePol = res;
      const a = Math.floor(Math.random() * this.listePol.length);
      const b = Math.floor(Math.random() * this.listePol.length);
      const result = this.listePol.filter((el,i) => i === a || i === b);
      this.listePol = result;
    });
  }
  loadInt() {
    this.actusService.getCat("int").subscribe(res => {
      this.listeInt = res;
      const a = Math.floor(Math.random() * this.listeInt.length);
      const b = Math.floor(Math.random() * this.listeInt.length);
      const result = this.listeInt.filter((el,i) => i === a || i === b);
      this.listeInt = result;
    });
  }
  loadSoc() {
    this.actusService.getCat("soc").subscribe(res => {
      this.listeSoc = res;
      const a = Math.floor(Math.random() * this.listeSoc.length);
      const b = Math.floor(Math.random() * this.listeSoc.length);
      const result = this.listeSoc.filter((el,i) => i === a || i === b);
      this.listeSoc = result;
    });
  }
  loadCul() {
    this.actusService.getCat("cul").subscribe(res => {
      this.listeCul = res;
      const a = Math.floor(Math.random() * this.listeCul.length);
      const b = Math.floor(Math.random() * this.listeCul.length);
      const result = this.listeCul.filter((el,i) => i === a || i === b);
      this.listeCul = result;
    });
  }

}
