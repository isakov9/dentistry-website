import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';
import { Price } from 'src/app/models/price';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-prices',
  templateUrl: './admin-prices.component.html',
  styleUrls: ['./admin-prices.component.css']
})
export class AdminPricesComponent implements OnInit {
  constructor(private priceService: PriceService,
    private router: Router) { }

  prices: Price[] = [];

  ngOnInit(): void {
    this.getPrices();
  }

  getPrices() {
    this.priceService.getPrices().subscribe(data => {
      this.prices = data
    })
  }

  deletePrice(id: number) {
    this.priceService.deletePrice(id).subscribe(data => {

    })
  }


  toUpdatePrice(id: number) {
    this.router.navigate(['admin-price-update', id])
  }
}
