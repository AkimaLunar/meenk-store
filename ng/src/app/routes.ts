import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductComponent },
];
