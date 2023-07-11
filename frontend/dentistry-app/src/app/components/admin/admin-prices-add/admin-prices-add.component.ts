import { Component } from '@angular/core';
import { Price } from 'src/app/models/price';
import { PriceService } from 'src/app/services/price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-prices-add',
  templateUrl: './admin-prices-add.component.html',
  styleUrls: ['./admin-prices-add.component.css']
})
export class AdminPricesAddComponent {
  price = <Price>{};

  constructor(private priceService: PriceService,
    private router: Router) { }

  addPrice() {
    this.priceService.addPrice(this.price).subscribe(data => {
      this.goToListPrices();
    })
  }

  goToListPrices() {
    this.router.navigate(['admin-prices'])
  }
}
