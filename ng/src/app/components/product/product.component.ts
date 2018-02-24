import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanityService } from '../../services/sanity.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [SanityService]
})
export class ProductComponent implements OnInit {

  constructor(
    private sanity: SanityService,
    private route: ActivatedRoute
  ) { }

  product: Product;
  getProduct(_id: String): void {
    this.sanity
      .getProduct(_id)
      .subscribe(data => {
        this.product = data['result'][0];
      });
  }

  ngOnInit(): void {
    this.route.url
      .subscribe(url => this.getProduct(url[1].path));
  }

}
