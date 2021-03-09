import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  erreur = true;
  password = '';
  email ='';
  users: Users = {};
  listeUsers: Array <Users> = new Array <Users>();

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  isAuthenticated () {

    this.usersService.getUser(this.email, this.password).subscribe(res => {
      console.log("res : ", res);
      this.listeUsers = res;
      this.users = this.listeUsers[0];
      console.log("nom : ", this.users.nom_user);
      console.log("droits : ", this.users.droits);
    });

    if (1) {
      localStorage.setItem("isConnected", "true");
      this.router.navigateByUrl("/home");
    } else {
      this.erreur = false;
    }

  }

}
