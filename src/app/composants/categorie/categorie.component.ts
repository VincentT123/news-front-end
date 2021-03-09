import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actus } from 'src/app/interfaces/actus';
import { ActusService } from 'src/app/services/actus.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  cat: any;
  categ: any;
  actus: Actus = {};
  listeActus: Array <Actus> = new Array <Actus>();

  constructor(private actusService: ActusService ,private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(res => {
      this.categ = res.get('categ');     
      switch(this.categ) {
        case "Politique": {
          this.cat = "pol";
          break;
        }
        case "International": {
          this.cat = "int";
          break;
        }
        case "Société": {
          this.cat = "soc";
          break;
        }
        case "Culture": {
          this.cat = "cul";
          break;
        }
        default: {
          this.cat = "pol";
          break;
        }
      }
      this.reloadData();
    });
    
  }

  reloadData() {
    this.actusService.getCat(this.cat).subscribe(res => {
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
