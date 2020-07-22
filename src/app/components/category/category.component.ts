import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  price: number;
  category: string;

  constructor() {
    this.price = 15;
    this.category = "Electronics";
   }

  ngOnInit(): void {
  }

}
