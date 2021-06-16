import { Component, OnInit } from '@angular/core';
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
      title: 'Platinum Investment',
      imgUrl: '../../../assets/images/carousel-2.png',
      desc: 'Invest your assets and wealth in gold.'
    },
    {
      title: 'Silver Investment',
      imgUrl: '../../../assets/images/carousel-3.png',
      desc: 'Invest your assets and wealth in gold.'
    }
  ]

  getSliderClass(isFirst: any, isLast: any) {
    return {
      active: isFirst,
      lastactive: isLast,
    }
  }

  ngOnInit(): void {
  }

}
