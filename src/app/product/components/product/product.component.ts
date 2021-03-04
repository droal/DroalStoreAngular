import {
  Component,
  Input,
  Output,
  EventEmitter,
  // OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements
// OnChanges,
OnInit,
DoCheck,
OnDestroy
{

  @Input() product: Product;
  @Output() addProductCliked: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor(private cartService: CartService){
    console.log('1. constructor');
  }
/*   ngOnChanges(changes: SimpleChanges){
    console.log('2. ngOnchanges');
  } */
  ngOnInit(): void{
    console.log('3. ngOnInit');
  }
  ngDoCheck(): void{
    console.log('4. ngDoCheck');
  }
  ngOnDestroy(): void{
    console.log('5. ngOnDestroy');
  }


  addCart(): void{
    console.log('Añadir carrito pulsado');
    this.cartService.addCart(this.product);
    //this.addProductCliked.emit(this.product.id);
  }

}
