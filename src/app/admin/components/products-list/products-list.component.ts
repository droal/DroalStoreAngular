import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }


  fetchProducts(): void{
    this.productsService.getAllProducts()
    .subscribe(prod => {
      this.products = prod;
    });
  }

  deleteProduct(id: string): void{
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    });
  }

}
