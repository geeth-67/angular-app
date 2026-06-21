import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../products/products.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnDestroy , OnChanges{

  @Input() product?: Product;
  @Input() price?: number;

  constructor() {}

  ngOnInit(): void {
    console.log("product item init", this.product)
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log("product item changes", this.product)
  }
  ngOnDestroy(): void {
    console.log("product item destroy", this.product)
  }
}
