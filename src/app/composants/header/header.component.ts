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

  logout () {
    localStorage.removeItem("isConnected");
    this.router.navigate(['']);
  }

  isConnected () {
    if (Boolean(localStorage.getItem('isConnected'))) {
      return true;
    } else {
      return false;
    }
  }

  recherche() {
    this.router.navigate(['recherche', this.motcle]);
    this.motcle = "";
  }

}
