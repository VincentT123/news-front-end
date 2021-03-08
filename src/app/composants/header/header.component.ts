import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  motcle: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recherche() {
    this.router.navigate(['recherche', this.motcle]);
    this.motcle = "";
  }

}
