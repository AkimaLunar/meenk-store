import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SanityService {

  constructor(
    private http: HttpClient
  ) { }

  getProduct(_id: String): Observable<Object> {
    const query = `*[_id == '${_id}']{ name, _id, description, price, 'imageUrl': image.asset->url }`;
    return this.http.get(`${environment.sanityUrl}products?query=${query}`);
  }
  getProductList(): Observable<Object> {
    const query = `*[_type == 'product']{ name, _id, description, price, 'imageUrl': image.asset->url }`;
    return this.http.get(`${environment.sanityUrl}products?query=${query}`);
  }
}
