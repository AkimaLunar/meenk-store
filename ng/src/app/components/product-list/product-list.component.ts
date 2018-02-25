import { Component, OnInit } from '@angular/core';
import { Query } from '@angular/core/src/metadata/di';
import { Product } from '../../interfaces/product';
import { SanityService } from '../../services/sanity.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [SanityService]
})
export class ProductListComponent implements OnInit {

  constructor(private sanity: SanityService) { }
  products: Product[];
  ngOnInit(): void {
    this.sanity
      .getProductList()
      .subscribe(data => {
        this.products = data['result'];
        console.log(this.products);
      });
  }

}
