import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlLogin: string = 'http://localhost:8080/users/login';
  Users: Array<Users> = new Array<Users>();

  constructor(private http: HttpClient) { }

  // Récupère les informations de l'utilisateur selon son email et son mot de passe
  getUser(mail: string, pass: string): Observable<any> {
    let API_URL = `${this.urlLogin}/${mail}/${pass}`;
    console.log("API_URL : ", API_URL);
    
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.rows || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
