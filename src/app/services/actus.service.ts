import { Injectable } from '@angular/core';
import { Actus } from '../interfaces/actus';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActusService {

  url: string = 'http://localhost:8080/actus/categ';
  actus: Array<Actus> = new Array<Actus>();

  constructor(private http: HttpClient) { }

  // Recupère une liste d'actus selon une catégorie
  getCat(cat: string): Observable<any> {
    let API_URL = `${this.url}/${cat}`;
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
