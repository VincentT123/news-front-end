import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  car: Actus = {};
  listeCar: Array <Actus> = new Array <Actus>();
  pan: Actus = {};
  listePan: Array <Actus> = new Array <Actus>();
  pol: Actus = {};
  listePol: Array <Actus> = new Array <Actus>();
  int: Actus = {};
  listeInt: Array <Actus> = new Array <Actus>();
  soc: Actus = {};
  listeSoc: Array <Actus> = new Array <Actus>();
  cul: Actus = {};
  listeCul: Array <Actus> = new Array <Actus>();
  fil: Actus = {};
  listeFil: Array <Actus> = new Array <Actus>();
  lus: Actus = {};
  listeLus: Array <Actus> = new Array <Actus>();

  constructor(private actusService: ActusService ,private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.loadCar();
    this.loadPan();
    this.loadPol();
    this.loadInt();
    this.loadSoc();
    this.loadCul();
    this.loadFil();
    this.loadLus();
        
  }

  loadCar() {
    this.actusService.getCar().subscribe(res => {
      this.listeCar = res;   
      console.log("listeCar : ", this.listeCar); 
    });
  }
  loadPan() {
    this.actusService.getPan().subscribe(res => {
      this.listePan = res;   
      console.log("listePan : ", this.listePan); 
    });
  }
  loadPol() {
    this.actusService.getCat("pol").subscribe(res => {
      this.listePol = res;
      let a = Math.floor(Math.random() * this.listePol.length);
      let b = Math.floor(Math.random() * this.listePol.length);
      if (a==b) { b=Math.floor(Math.random() * this.listePol.length) }
      if (a==b) { b=Math.floor(Math.random() * this.listePol.length) }
      const result = this.listePol.filter((el,i) => i === a || i === b);
      this.listePol = result;
      console.log("a : ", a, " - b : ", b);
      console.log("listePol : ", this.listePol);
    });
  }
  loadInt() {
    this.actusService.getCat("int").subscribe(res => {
      this.listeInt = res;
      let a = Math.floor(Math.random() * this.listeInt.length);
      let b = Math.floor(Math.random() * this.listeInt.length);
      if (a==b) { b=Math.floor(Math.random() * this.listeInt.length) }
      if (a==b) { b=Math.floor(Math.random() * this.listeInt.length) }
      const result = this.listeInt.filter((el,i) => i === a || i === b);
      this.listeInt = result;
      console.log("a : ", a, " - b : ", b);
      console.log("listeInt : ", this.listeInt);
    });
  }
  loadSoc() {
    this.actusService.getCat("soc").subscribe(res => {
      this.listeSoc = res;
      let a = Math.floor(Math.random() * this.listeSoc.length);
      let b = Math.floor(Math.random() * this.listeSoc.length);
      if (a==b) { b=Math.floor(Math.random() * this.listeSoc.length) }
      if (a==b) { b=Math.floor(Math.random() * this.listeSoc.length) }
      const result = this.listeSoc.filter((el,i) => i === a || i === b);
      this.listeSoc = result;
      console.log("a : ", a, " - b : ", b);
      console.log("listeSoc : ", this.listeSoc);
    });
  }
  loadCul() {
    this.actusService.getCat("cul").subscribe(res => {
      this.listeCul = res;
      let a = Math.floor(Math.random() * this.listeCul.length);
      let b = Math.floor(Math.random() * this.listeCul.length);
      if (a==b) { b=Math.floor(Math.random() * this.listeCul.length) }
      if (a==b) { b=Math.floor(Math.random() * this.listeCul.length) }
      const result = this.listeCul.filter((el,i) => i === a || i === b);
      this.listeCul = result;
      console.log("a : ", a, " - b : ", b);
      console.log("listeCul : ", this.listeCul);
    });
  }
  loadFil() {
    this.actusService.getFil().subscribe(res => {
      this.listeFil = res;      
    });
  }
  loadLus() {
    this.actusService.getLus().subscribe(res => {
      this.listeLus = res;      
    });
  }

}
