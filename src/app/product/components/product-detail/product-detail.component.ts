import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {ProductsService} from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']

})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProdcut(id);
    });
  }

  fetchProdcut(id: string): void{
    this.productsService.getProduct(id)
    .subscribe(prod => {
      this.product = prod;
    });
  }

  createProduct(): void{
    const p: Product = {
      id: '22',
      title: 'title',
      image: '',
      price: 200,
      description: 'wewewqeqe'
    };

    this.productsService.createProduct(p)
    .subscribe(prod => {
      this.product = prod;
    });
  }

  updateProduct(): void{
    const p: Partial<Product> = {
      title: 'title updtaes',
      price: 22,
      description: 'updtaes'
    };

    this.productsService.updateProduct('22', p)
    .subscribe(prod => {
      this.product = prod;
    });
  }

  deleteProduct(): void{
    this.productsService.deleteProduct('22')
    .subscribe(prod => {
      this.product = prod;
    });
  }

}
