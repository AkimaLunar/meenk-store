import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Query } from '@angular/core/src/metadata/di';

import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  products: Product[];
  ngOnInit(): void {
    const query = `*[_type == 'product']{ name, _id, description, price, 'imageUrl': image.asset->url }`;
    this.http
      .get(`https://854z9uae.apicdn.sanity.io/v1/data/query/products?query=${query}`)
      .subscribe(data => {
        this.products = data['result'];
        console.log(this.products);
      });
  }

}
