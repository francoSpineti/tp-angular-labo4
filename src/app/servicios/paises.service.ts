import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  api = "https://restcountries.eu/rest/v2/all";
  paisPorNombre = "https://restcountries.eu/rest/v2/name/";

  constructor(private http : HttpClient) { }

  getPaises(){
    return this.http.get(this.api);
  }

  obtenerPaisPorNombre(pais : string){
    return this.http.get(this.paisPorNombre.concat(pais));
  }

}
