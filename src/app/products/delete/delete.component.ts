import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  productDelete: IProduct;
  IdProduct: number = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.productDelete = this.productsService.findById(this.IdProduct);
  }

  delete(index, qty) {
    this.productsService.deleteProduct(index.productDelete, 1);
    this.router.navigate(['/products']);
    console.log(this.productDelete);
  }
}
