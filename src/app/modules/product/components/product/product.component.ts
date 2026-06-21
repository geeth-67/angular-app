import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../products/products.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnDestroy , OnChanges{

  @Input() product?: Product;
  @Input() price?: number;

  constructor(private navigation: Router) {
  }

  ngOnInit(): void {
    console.log("product item init", this.product)
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log("product item changes", this.product)
  }
  ngOnDestroy(): void {
    console.log("product item destroy", this.product)
  }
  onViewProduct(){
    console.log('Product View');
    this.navigation.navigate(['/app/products/view-product']);
  }
}
