import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  product: Product;
  getProduct(_id: String): void {
    const query = `*[_id == '${_id}']{ name, _id, description, price, 'imageUrl': image.asset->url }`;
    this.http
      .get(`https://854z9uae.apicdn.sanity.io/v1/data/query/products?query=${query}`)
      .subscribe(data => {
        this.product = data['result'][0];
      });
  }

  ngOnInit(): void {
    this.route.url
      .subscribe(url => this.getProduct(url[1].path));
  }

}
