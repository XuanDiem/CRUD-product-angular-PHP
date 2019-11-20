import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../iproduct';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addProductForm = this.fb.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(4)]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });

  constructor(private productsService: ProductsService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  submit() {
    this.productsService.createProduct(this.addProductForm.value);
    this.router.navigate(['/products']);
    console.log(this.productsService.productList);
  }
  ngOnInit() {
  }

  get id() {
    return this.addProductForm.get('id');
  }

  get name() {
    return this.addProductForm.get('name');
  }

  get image() {
    return this.addProductForm.get('image');
  }

  get price() {
    return this.addProductForm.get('price');
  }

}
