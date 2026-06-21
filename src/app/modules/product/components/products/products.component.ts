import {AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit , OnChanges ,OnDestroy , DoCheck ,AfterViewInit{

  private title = 'Available Products';
  public titlePublic = "Available Products";

  public products: Product[] = [
    {name: 'iPhone', price: 1000, currency: 'USD'},
    {name: 'iPad', price: 2000, currency: 'LKR'},
    {name: 'iWatch', price: 3000, currency: 'USD'},
  ];

  public displayProducts: Product[] = [];

  constructor() {
    console.log("product constructor")
  }

  ngOnInit() {
    this.displayProducts = this.products;
  }
  ngOnChanges(changes:SimpleChanges) {
    // console.log("product OnChange")
  }
  ngAfterViewInit(): void {
    // console.log("product after view init")
  }
  ngOnDestroy(): void {
    // console.log("product destroy")
  }
  ngDoCheck() {
    // console.log("product Do check")
  }


  public onSearchChange(searchValue: any){
    if (searchValue){
     // this.displayProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      this.displayProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(
        product => {
          product.price = product.price * 10;
          return product;
        }
      );

    }else {
      this.displayProducts = this.products;
    }
  }
}

export interface Product {
  name: string;
  price: number;
  currency: string;
}
