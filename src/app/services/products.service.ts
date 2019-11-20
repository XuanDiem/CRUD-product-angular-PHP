import {Injectable} from '@angular/core';
import {IProduct} from '../products/iproduct';

// export interface IProductService {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// }

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  productList: IProduct [] = [
    {
      id: 1, name: 'Laptop 1', image: 'assets/images/laptopapple.gif', price: 30000000
    },
    {
      id: 2, name: 'Laptop 2', image: 'assets/images/laptop1.gif', price: 40000000
    }
  ];

  constructor() {
  }

  findById(id) {
    return this.productList.find(product => product.id === id);
  }

  createProduct(product) {
    this.productList.push(product);
  }

  updateProduct(data) {
  }

  deleteProduct(index, qty) {
    this.productList.splice(index, qty);
  }
  //
  // getAll() {
  //   return this.productList;
  // }
}
