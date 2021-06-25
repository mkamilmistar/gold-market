import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { NavbarService } from 'src/app/shared/services/navbar/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  displayFormat = "dddd, DD MMMM YYYY";
  faUsers = faUser;

  constructor(
    public nav: NavbarService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  
  ) { }

  ngOnInit(): void {
  }

  navigateProduct(productType: string, productId: number) {
    this.router.navigate(['/products'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        search: productType,
        productId: productId
      },
      queryParamsHandling: 'merge'
    })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // let elementNav = document.querySelector('.navbar') as HTMLElement;
    // let elementDate = document.querySelector('.badge') as HTMLElement;
    // let elementTitle = document.querySelectorAll(".nav-item");
    
    // if (window.pageYOffset <= 80) {
    //   elementNav.classList.add('navbar-dark bg-dark');
    //   elementDate.classList.add('text-white')

    //   for (let i = 0; i < elementTitle.length; i++) {
    //     elementTitle[i].classList.add('text-gold')
    //   }
    // } else {
    //   elementNav.classList.add('navbar-light bg-light');
    //   elementNav.classList.remove('navbar-darkbg-dark');
    //   elementDate.classList.remove('text-white')
    //   elementDate.classList.add('text-secondary')

    //   for (let i = 0; i < elementTitle.length; i++) {
    //     elementTitle[i].classList.remove('text-gold')
    //     // elementTitle[i].classList.add('text-warning')
    //   }
    // }
  } 
  
}
