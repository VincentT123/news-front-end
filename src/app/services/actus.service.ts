import { Injectable } from '@angular/core';
import { Actus } from '../interfaces/actus';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActusService {

  urlCar: string = 'http://localhost:8080/actus/carous';
  urlPan: string = 'http://localhost:8080/actus/panel';
  urlCat: string = 'http://localhost:8080/actus/categ';
  urlFil: string = 'http://localhost:8080/actus/filactus';
  urlLus: string = 'http://localhost:8080/actus/pluslus';
  actus: Array<Actus> = new Array<Actus>();

  constructor(private http: HttpClient) { }

  // Recupère une liste d'actus selon l'ID ASC pour le carousel
  getCar(): Observable<any> {
    let API_URL = `${this.urlCar}`;
    console.log("API_URL : ", API_URL);
    
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.rows || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Recupère une liste d'actus selon l'ID DESC pour le panel
  getPan(): Observable<any> {
    let API_URL = `${this.urlPan}`;
    console.log("API_URL : ", API_URL);
    
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.rows || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Recupère une liste d'actus selon une catégorie
  getCat(cat: string): Observable<any> {
    let API_URL = `${this.urlCat}/${cat}`;
    console.log("API_URL : ", API_URL);
    
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.rows || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Recupère une liste d'actus selon la date pour le fil d'actus
  getFil(): Observable<any> {
    let API_URL = `${this.urlFil}`;
    console.log("API_URL : ", API_URL);
    
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.rows || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Recupère une liste d'actus selon nblu pour les plus lus
  getLus(): Observable<any> {
    let API_URL = `${this.urlLus}`;
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
