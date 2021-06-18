import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductBenefits, ServiceBenefits } from './benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  buttonLabel = "Login"
  serviceBenefits: ServiceBenefits[] = [
    {
      title: "delivery",
      desc: "We have free delivery service to all city in Indonesia."
    },
    {
      title: "legality",
      desc: "We commit to keep your trusted with legality transaction."
    },
    {
      title: "price",
      desc: "Good quality with the best prices."
    }
  ]
  productBenefits: ProductBenefits[] = [
    {
      title: "reward",
      desc: "More transaction more point and reward."
    },
    {
      title: "transaction",
      desc: "Our transaction is simple and secure."
    },
    {
      title: "brand",
      desc: "Our product is the best on quality and brand."
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  functionCall() {
    this.router.navigateByUrl('/login');
  }

}
