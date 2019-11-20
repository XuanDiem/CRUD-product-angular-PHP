import {Component, OnInit} from '@angular/core';
import {IProduct} from './iproduct';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private products;

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productService.productList;
  }


}
