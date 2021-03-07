import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actus } from 'src/app/interfaces/actus';
import { ActusService } from 'src/app/services/actus.service';

@Component({
  selector: 'app-uneactu',
  templateUrl: './uneactu.component.html',
  styleUrls: ['./uneactu.component.css']
})
export class UneactuComponent implements OnInit {

  id: any;
  actus: Actus = {};
  listeActus: Array <Actus> = new Array <Actus>();

  constructor(private actusService: ActusService ,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = res.get('id');
      console.log("this.id : ", this.id);  
      this.loadActu();
    });
  }

  loadActu() {
    this.actusService.getActu(this.id).subscribe(res => {
      this.listeActus = res;
      this.actus = this.listeActus[0];
    });
  }

}
