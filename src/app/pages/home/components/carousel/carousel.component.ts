import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CarouselPost } from './carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  carousels: CarouselPost[] = [
    {
      title: 'Gold Investment',
      imgUrl: '../../../assets/images/carousel-1.png',
      desc: 'Invest your assets and wealth in gold.'
    },
    {
      title: 'Saving with Jewelry',
      imgUrl: '../../../assets/images/carousel-2.png',
      desc: "Lets's save and decorate with gold jewelry."
    },
    {
      title: 'Silver Investment',
      imgUrl: '../../../assets/images/carousel-3.png',
      desc: 'Invest your assets and wealth in gold.'
    }
  ]

  ngOnInit(): void {
  }

}
