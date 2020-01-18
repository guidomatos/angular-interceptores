import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  obtenerUsuario() {

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Guido Matos');

    return this.http.get('https://reqres3434.in/api/user', {
      params
      // ,headers
    }).pipe(

      map( resp => resp['data'] )

    );
  }

}
