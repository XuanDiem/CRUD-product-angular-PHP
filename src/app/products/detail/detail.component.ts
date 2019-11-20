import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailProduct: IProduct;
  idProduct: number = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.detailProduct = this.productsService.findById(this.idProduct);
  }

}
