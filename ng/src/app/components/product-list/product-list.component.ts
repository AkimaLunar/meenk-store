import { Component, OnInit } from '@angular/core';
import { Query } from '@angular/core/src/metadata/di';
import { Product } from '../../interfaces/product';
import { SanityService } from '../../services/sanity.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [SanityService]
})
export class ProductListComponent implements OnInit {

  constructor(private sanity: SanityService) { }
  products: Product[];
  ngOnInit(): void {
    const query = `*[_type == 'product']{ name, _id, description, price, 'imageUrl': image.asset->url }`;
    this.sanity
      .getProductList()
      .subscribe(data => {
        this.products = data['result'];
        console.log(this.products);
      });
  }

}
