import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  constructor(private priceService: PriceService) { }

  prices: Price[] = []


  ngOnInit(): void {
    this.getPrices()
  }

  getPrices() {
    this.priceService.getPrices().subscribe(data => {
      this.prices = data
    })
  }
}
