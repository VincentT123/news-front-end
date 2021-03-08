import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actus } from 'src/app/interfaces/actus';
import { ActusService } from 'src/app/services/actus.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  // id: number = 0;
  motcle: any;
  actus: Actus = {};
  listeActus: Array <Actus> = new Array <Actus>();

  constructor(private actusService: ActusService ,private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(res => {
      this.motcle = res.get('motcle');
      console.log("this.motcle : ", this.motcle);
      this.loadRecherche();
    });

  }

  loadRecherche() {
    this.actusService.getRech(this.motcle).subscribe(res => {
      console.log("res : ", res);
      this.listeActus = res;
      console.log("listeActus : ", this.listeActus);
    });
  }

  lireActu(id:any) {
    console.log("id : " , id);
    this.router.navigate(['uneactu', id]);
  }

}
