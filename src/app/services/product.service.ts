import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Product[] = [];

  getProducts(): Product[] {
    this.products = [
      {
        id: 1, 
        name: "Echo Glow", 
        description: "Multicolor Smart Lamp for Kids, a Certified for Humans Device – Requires compatible Alexa device", 
        price: 29.99, 
        review: "nice", 
        image: "https://images-na.ssl-images-amazon.com/images/I/515sRGpKgCL._AC_SL1000_.jpg"
      },
    ];
    return this.products;
  }
}
