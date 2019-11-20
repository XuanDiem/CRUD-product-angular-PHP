import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editProduct: IProduct;
  idProduct: number = +this.activatedRoute.snapshot.paramMap.get('id');
  updateProductForm = this.fb.group({
    id: [this.idProduct],
    name: ['', [Validators.required, Validators.minLength(4)]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private router: Router,
              private productsService: ProductsService,
              private activatedRoute: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.editProduct = this.productsService.findById(this.idProduct);
    console.log(this.editProduct);
    // const idProduct = this.route.snapshot.paramMap.get('id');
    // const product = this.productsService.findById(idProduct);
  }

  submit() {
    this.productsService.updateProduct(this.updateProductForm.value);
    this.router.navigate(['/products']);
  }

  get id() {
    return this.updateProductForm.get('id');
  }

  get name() {
    return this.updateProductForm.get('name');
  }

  get image() {
    return this.updateProductForm.get('image');
  }

  get price() {
    return this.updateProductForm.get('price');
  }
}
