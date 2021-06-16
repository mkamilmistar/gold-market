import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    {
      title: 'Platinum Investment',
      imgUrl: '../../../../../assets/images/1.png'
    },
    {
      title: 'Gold Investment',
      imgUrl: '../../../../../assets/images/2.png'
    },
    {
      title: 'Silver Investment',
      imgUrl: '../../../../../assets/images/3.png'
    }
  ]

  ngOnInit(): void {
  }

}
